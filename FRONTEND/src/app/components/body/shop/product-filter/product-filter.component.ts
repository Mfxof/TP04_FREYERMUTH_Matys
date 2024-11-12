import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CatalogueService } from '../../../../services/catalogue.service';
import { Produit } from '../../../../models/produit.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css',
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  searchCriteria = {
    name: '',
    minPrice: null,
    maxPrice: null,
    category: '',
  };

  categories: string[] = [];
  private readonly subscription: Subscription = new Subscription();

  @Output() searchResults = new EventEmitter<Produit[]>();

  constructor(private readonly catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.catalogueService.getCatalogue().subscribe((produits: Produit[]) => {
        this.categories = [
          ...new Set(produits.map((produit) => produit.category)),
        ];
      })
    );
  }

  onSearch(): void {
    this.subscription.add(
      this.catalogueService.getCatalogue().subscribe((produits: Produit[]) => {
        const filteredProducts = produits.filter((produit) => {
          return (
            (!this.searchCriteria.name ||
              produit.name
                .toLowerCase()
                .includes(this.searchCriteria.name.toLowerCase())) &&
            (!this.searchCriteria.minPrice ||
              produit.price >= this.searchCriteria.minPrice) &&
            (!this.searchCriteria.maxPrice ||
              produit.price <= this.searchCriteria.maxPrice) &&
            (!this.searchCriteria.category ||
              produit.category === this.searchCriteria.category)
          );
        });
        this.searchResults.emit(filteredProducts);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
