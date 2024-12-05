import { Routes } from '@angular/router';
import { CardsformComponent } from './components/body/cards/cards-form/cards-form.component';
import { ProductListComponent } from './components/body/shop/product-list/product-list.component';
import { CarouselComponent } from './components/side/carousel/carousel.component';

export const routes: Routes = [
  { path: 'boutique', component: ProductListComponent },
  { path: 'index', component: ProductListComponent },
  { path: 'paiement', component: CardsformComponent },
  {
    path: '**',
    component: CarouselComponent,
  },
];
