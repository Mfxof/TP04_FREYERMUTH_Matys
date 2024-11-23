import { Component, OnInit, OnDestroy, computed, effect } from '@angular/core';
import { CardsService } from '../../../../services/cards.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent implements OnInit, OnDestroy {
  cartes = computed(() => this.carteService.getCartes()());

  constructor(private carteService: CardsService) {
    effect(() => {});
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  delCarte(indexCarte: number): void {
    this.carteService.delCarte(indexCarte);
  }
}
