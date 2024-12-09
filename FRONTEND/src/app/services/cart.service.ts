import { Injectable, signal } from '@angular/core';
import { CartProduct } from '../models/cartProduct.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private panier = signal<CartProduct[]>([]);

  constructor() {}

  addProduit(produit: CartProduct) {
    let panier = this.panier();
    let found = false;

    for (let i = 0; i < panier.length; i++) {
      if (panier[i].id === produit.id) {
        panier[i].quantity += produit.quantity;
        found = true;
        break;
      }
    }

    if (!found) {
      panier.push(produit);
    }

    this.panier.set(panier);

    //log all the products in the cart
    console.log(this.panier());
  }

  setProduitQtt(produit: CartProduct) {
    let panier = this.panier();
    if (produit.quantity <= 0) {
      this.removeProduit(produit);
      return;
    }

    for (let i = 0; i < panier.length; i++) {
      if (panier[i].id === produit.id) {
        panier[i].quantity = produit.quantity;
        break;
      }
    }

    this.panier.set(panier);
  }

  removeProduit(card: CartProduct) {
    let panier = this.panier();
    for (let i = 0; i < panier.length; i++) {
      if (panier[i].id === card.id) {
        panier.splice(i, 1);
        this.panier.set(panier);
        break;
      }
    }
  }

  get getPanier() {
    return this.panier;
  }

  get getTotal() {
    let total = 0;
    let panier = this.panier();
    for (let i = 0; i < panier.length; i++) {
      total += panier[i].price * panier[i].quantity;
    }
    return total;
  }

  get getNbProduits() {
    let nb = 0;
    let panier = this.panier();
    for (let i = 0; i < panier.length; i++) {
      nb += panier[i].quantity;
    }
    return nb;
  }
}
