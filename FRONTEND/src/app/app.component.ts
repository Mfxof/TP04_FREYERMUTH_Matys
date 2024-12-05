import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/side/header/header.component';
import { FooterComponent } from './components/side/footer/footer.component';
import { CarouselComponent } from './components/side/carousel/carousel.component';
import { IndexBodyComponent } from './components/body/index/index-body/index-body.component';
import { ProductListComponent } from './components/body/shop/product-list/product-list.component';
import { CardsListComponent } from './components/body/cards/cards-list/cards-list.component';
import { CardsformComponent } from './components/body/cards/cards-form/cards-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    IndexBodyComponent,
    ProductListComponent,
    CardsListComponent,
    CardsformComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}
  title = 'TP04-FREYERMUTH-MATYS';

  ngOnInit(): void {}
}
