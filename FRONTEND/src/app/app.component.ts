import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Produit } from './services/produit';
import { CatalogueService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductFilterComponent, ProductListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONTEND';
  catalogue: Produit[] = [];
  filteredCatalogue: Produit[] = [];
  selectedTags: string[] = [];
  sortOrder: string = 'asc';

  constructor(private catalogueService: CatalogueService) {
    this.catalogue = this.catalogueService.getCatalogue();
    this.filteredCatalogue = this.catalogue;
  }

  updateFilteredCatalogue(selectedTags: string[]) {
    this.selectedTags = selectedTags;
    this.filterProducts();
  }

  updateSortOrder(sortOrder: string) {
    this.sortOrder = sortOrder;
    this.sortProducts();
  }

  updateCatalogueByTag(tag: string) {
    this.filterProducts();
  }

  private filterProducts() {
    this.filteredCatalogue = this.catalogue.filter(produit =>
      this.selectedTags.length === 0 || this.selectedTags.some(tag => produit.tags.includes(tag))
    );
    this.sortProducts();
  }

  private sortProducts() {
    this.filteredCatalogue.sort((a, b) => 
      this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
  }
}
