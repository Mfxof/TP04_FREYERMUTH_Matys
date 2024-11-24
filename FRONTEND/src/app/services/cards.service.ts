import { Injectable, signal } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards = signal<Card[]>([
    {
      name: 'Jack POISON',
      code: '1234 1234 1234 1234',
      ccv: 111,
      month: 10,
      years: 25,
    },
    {
      name: 'Pierre DUPONT',
      code: '4444 5555 6666 9999',
      ccv: 456,
      month: 1,
      years: 26,
    },
    {
      name: 'Jean-Paul MEYER',
      code: '1234 5678 9123 4567',
      ccv: 123,
      month: 8,
      years: 25,
    },
    {
      name: 'Marie CLÉMENT',
      code: '9876 5432 1098 7654',
      ccv: 789,
      month: 12,
      years: 27,
    },
    {
      name: 'Sophie MARTIN',
      code: '1111 2222 3333 4444',
      ccv: 321,
      month: 5,
      years: 28,
    },
    {
      name: 'Lucas ROBERT',
      code: '5555 6666 7777 8888',
      ccv: 654,
      month: 3,
      years: 29,
    },
    {
      name: 'Emma DURAND',
      code: '1010 2020 3030 4040',
      ccv: 987,
      month: 7,
      years: 26,
    },
    {
      name: 'Léo GARNIER',
      code: '7070 8080 9090 1010',
      ccv: 432,
      month: 11,
      years: 27,
    },
  ]);

  constructor() {}

  getCartes() {
    return this.cards;
  }

  addCarte(card: Card) {
    this.cards.update((cards) => [...cards, card]);
  }

  delCarte(index: number) {
    this.cards.update((cards) => cards.filter((_, i) => i !== index));
  }
}
