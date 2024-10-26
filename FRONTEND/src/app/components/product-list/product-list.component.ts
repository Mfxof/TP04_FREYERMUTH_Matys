import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Chat', price: 10.99, tags: ['animal', 'domestique'] },
    { id: 2, name: 'Voiture', price: 126036, tags: ['transport', 'véhicule'] },
    { id: 3, name: 'Cheval', price: 200, tags: ['animal', 'ferme'] },
    { id: 4, name: 'Pain', price: 5.75, tags: ['alimentaire', 'boulangerie'] },
    { id: 5, name: 'Téléphone', price: 799, tags: ['électronique', 'communication'] },
    { id: 6, name: 'Ordinateur', price: 1200, tags: ['électronique', 'informatique'] },
    { id: 7, name: 'Chaise', price: 45, tags: ['mobilier', 'intérieur'] },
    { id: 8, name: 'Table', price: 150, tags: ['mobilier', 'intérieur'] },
    { id: 9, name: 'Montre', price: 250, tags: ['accessoire', 'horlogerie'] },
    { id: 10, name: 'Bicycle', price: 300, tags: ['transport', 'loisir'] },
    { id: 11, name: 'Café', price: 2.5, tags: ['alimentaire', 'boisson'] },
    { id: 12, name: 'Thé', price: 3, tags: ['alimentaire', 'boisson'] },
    { id: 13, name: 'Tapis', price: 80, tags: ['décoration', 'intérieur'] },
    { id: 14, name: 'Lampe', price: 60, tags: ['éclairage', 'intérieur'] },
    { id: 15, name: 'Sac à dos', price: 70, tags: ['accessoire', 'voyage'] },
    { id: 16, name: 'Clé USB', price: 15, tags: ['informatique', 'stockage'] },
    { id: 17, name: 'Appareil photo', price: 500, tags: ['électronique', 'photographie'] },
    { id: 18, name: 'Jeu vidéo', price: 60, tags: ['loisir', 'divertissement'] },
    { id: 19, name: 'Livre', price: 20, tags: ['lecture', 'culture'] },
    { id: 20, name: 'Chaussures', price: 85, tags: ['habillement', 'accessoire'] }
  ];
  
}
