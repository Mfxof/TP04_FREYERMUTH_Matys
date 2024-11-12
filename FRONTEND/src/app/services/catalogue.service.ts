// src/app/services/catalogue.service.ts
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  constructor(private readonly http: HttpClient) { }

  getCatalogue(): Observable<Produit[]> {
    return this.http.get<{products: Produit[]}>(environment.baseUrl)
      .pipe(
        map(response => response.products)
      );
  }
}
