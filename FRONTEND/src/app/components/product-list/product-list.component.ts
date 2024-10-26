import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueService } from '../../services/product.service';
import { Produit } from '../../services/produit';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  catalogue: Array<Produit> = [];

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit() {
    this.catalogue = this.catalogueService.getCatalogue();
  }
  
}
