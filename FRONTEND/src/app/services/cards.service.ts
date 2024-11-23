import { Injectable, signal } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cartes = signal<Card[]>([
    {
      name: 'Mfr',
      code: '1234123412341234',
      ccv: 111,
      month: 10,
      years: 29,
    },
  ]);

  constructor() {}

  getCartes() {
    return this.cartes;
  }

  addCarte(carte: Card) {
    this.cartes.update((cartes) => [...cartes, carte]);
  }

  delCarte(index: number) {
    this.cartes.update((cartes) => cartes.filter((_, i) => i !== index));
  }
}
