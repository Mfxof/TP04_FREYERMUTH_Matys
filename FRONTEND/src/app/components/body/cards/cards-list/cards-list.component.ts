import { Component, OnInit, OnDestroy, computed, effect } from '@angular/core';
import { CardsService } from '../../../../services/cards.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent implements OnInit, OnDestroy {
  cards = computed(() => this.cardService.getCartes()());

  constructor(private cardService: CardsService) {
    effect(() => {});
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  delCarte(indexCarte: number): void {
    this.cardService.delCarte(indexCarte);
  }
}
