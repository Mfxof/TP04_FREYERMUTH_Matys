import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../../services/produit';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() catalogue: Produit[] = [];

  ngOnInit() {
  }
}
