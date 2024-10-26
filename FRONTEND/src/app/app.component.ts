import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductFilterComponent, ProductListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FRONTEND';
}
