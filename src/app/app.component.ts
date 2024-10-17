import { Component } from '@angular/core';
import { Router, RouterOutlet, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, HeaderComponent, FooterComponent, RecapitulatifComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP02';

  constructor(private router: Router) {
    this.router.resetConfig([
      { path: 'form', component: FormComponent },
      { path: 'recapitulatif', component: RecapitulatifComponent },
      { path: '', redirectTo: 'form', pathMatch: 'full' }
    ]);
  }
}
