import { Injectable, signal } from '@angular/core';
import { CartProduct } from '../models/cartProduct.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private readonly http: HttpClient) {}
  private panier = signal<CartProduct[]>([]);

  getCatalogue(): Observable<CartProduct[]> {
    return this.http
      .get<{ cartProduct: CartProduct[] }>(environment.baseUrl)
      .pipe(map((response) => response.cartProduct));
  }

  get getPrixTotal() {
    let total = 0;
    let panier = this.panier();
    for (let i = 0; i < panier.length; i++) {
      total += panier[i].price * panier[i].quantity;
    }
    return total;
  }

  get getArticleTotal() {
    let panier = this.panier();
    let total = panier.length;
    return total;
  }

  addProduit(cartProduct: CartProduct) {
    let panier = this.panier();
    let found = false;

    for (let i = 0; i < panier.length; i++) {
      if (panier[i].name === cartProduct.name) {
        panier[i].quantity += cartProduct.quantity;
        found = true;
        break;
      }
    }

    if (!found) {
      panier.push(cartProduct);
    }

    this.panier.set(panier);

    //log all the products in the cart
    console.log(this.panier());
  }
}
