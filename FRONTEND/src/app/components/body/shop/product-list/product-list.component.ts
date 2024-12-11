import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../../../../services/catalogue.service';
import { Produit } from '../../../../models/produit.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { CartProduct } from '../../../../models/cartProduct.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent, RouterLink, RouterOutlet],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits: Produit[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private readonly catalogueService: CatalogueService,
    private cartService: CartService
  ) {}

  id: String = '5';

  ngOnInit(): void {
    this.subscription.add(
      this.catalogueService.getCatalogue().subscribe((data: Produit[]) => {
        console.log('Mes produits :', data);
        this.produits = data;
      })
    );
  }

  onSearchResults(filteredProducts: Produit[]): void {
    this.produits = filteredProducts;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddToCart(product: Produit, quantity: string) {
    const cartProducts = new CartProduct();
    cartProducts.name = product.name;
    cartProducts.description = product.description;
    cartProducts.price = product.price;
    cartProducts.image = product.image;
    cartProducts.quantity = +parseInt(quantity);
    cartProducts.description = product.description;

    this.cartService.addProduit(cartProducts);
  }

  // *************** //
  //       T1        //
  // *************** //

  get getArticleTotal() {
    return this.cartService.getArticleTotal;
    // Faire la qqt
  }
}
