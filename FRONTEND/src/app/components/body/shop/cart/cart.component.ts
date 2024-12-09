import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct } from '../../../../models/cartProduct.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent, RouterLink, RouterOutlet],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnDestroy {
  cartProduits: CartProduct[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private readonly cartService: CartService) {}

  id: String = '';

  ngOnInit(): void {
    this.subscription.add(
      this.cartService.getCatalogue().subscribe((data: CartProduct[]) => {
        console.log('Mes produits :', data);
        this.cartProduits = data;
      })
    );
  }

  onSearchResults(filteredProducts: CartProduct[]): void {
    this.cartProduits = filteredProducts;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRemoveFromCart(cartProduct: CartProduct) {
    this.cartService.removeProduit(cartProduct);
  }

  // *************** //
  //       T1        //
  // *************** //

  get getArticleTotal() {
    return this.cartService.getArticleTotal;
  }

  get getPrixTotal() {
    return this.cartService.getPrixTotal;
  }

  get getPanier() {
    return this.cartService.getPanier;
  }
}
