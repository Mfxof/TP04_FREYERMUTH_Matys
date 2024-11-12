import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../../../../services/catalogue.service';
import { Produit } from '../../../../models/produit.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  produits: Produit[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private readonly catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.catalogueService.getCatalogue().subscribe((data: Produit[]) => {
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
}
