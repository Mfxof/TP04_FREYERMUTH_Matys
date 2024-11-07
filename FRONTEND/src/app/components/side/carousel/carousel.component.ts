// app.component.ts ou ton composant
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  next() {
    const items = document.querySelectorAll('.carousel-item');
    this.currentIndex = (this.currentIndex + 1) % items.length;
    this.updateCarousel();
  }

  prev() {
    const items = document.querySelectorAll('.carousel-item');
    this.currentIndex = (this.currentIndex - 1 + items.length) % items.length;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updateCarousel();
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  private updateCarousel() {
    const inner = document.querySelector('.carousel-inner');
    if (inner) {
      inner.setAttribute(
        'style',
        `transform: translateX(-${this.currentIndex * 100}%)`
      );
    }

    // Update indicators
    document
      .querySelectorAll('.carousel-indicators button')
      .forEach((btn, i) => {
        if (i === this.currentIndex) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
  }
}
