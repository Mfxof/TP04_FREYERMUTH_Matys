import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private produits: Array<Produit> = [
    new Produit(1, 'Chat', 10.99, ['animal', 'domestique']),
    new Produit(2, 'Voiture', 126036, ['transport', 'véhicule']),
    new Produit(3, 'Cheval', 200, ['animal', 'ferme']),
    new Produit(4, 'Pain', 5.75, ['alimentaire', 'boulangerie']),
    new Produit(5, 'Téléphone', 799, ['électronique', 'communication']),
    new Produit(6, 'Ordinateur', 1200, ['électronique', 'informatique']),
    new Produit(7, 'Chaise', 45, ['mobilier', 'intérieur']),
    new Produit(8, 'Table', 150, ['mobilier', 'intérieur']),
    new Produit(9, 'Montre', 250, ['accessoire', 'horlogerie']),
    new Produit(10, 'Bicycle', 300, ['transport', 'loisir']),
    new Produit(11, 'Café', 2.5, ['alimentaire', 'boisson']),
    new Produit(12, 'Thé', 3, ['alimentaire', 'boisson']),
    new Produit(13, 'Tapis', 80, ['décoration', 'intérieur']),
    new Produit(14, 'Lampe', 60, ['éclairage', 'intérieur']),
    new Produit(15, 'Sac à dos', 70, ['accessoire', 'voyage']),
    new Produit(16, 'Clé USB', 15, ['informatique', 'stockage']),
    new Produit(17, 'Appareil photo', 500, ['électronique', 'photographie']),
    new Produit(18, 'Jeu vidéo', 60, ['loisir', 'divertissement']),
    new Produit(19, 'Livre', 20, ['lecture', 'culture']),
    new Produit(20, 'Chaussures', 85, ['habillement', 'accessoire'])
  ];

  constructor() {}

  public getCatalogue(): Array<Produit> {
    return this.produits;
    
  }
}
