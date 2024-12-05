import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../../../../services/catalogue.service';
import { Produit } from '../../../../models/produit.model';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { RouterOutlet, RouterLink } from '@angular/router';

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

  constructor(private readonly catalogueService: CatalogueService) {}

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
}
