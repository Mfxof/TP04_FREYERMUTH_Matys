import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent {
  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  cp: string = '';
  ville: string = '';
  tel: string = '';
  email: string = '';
  civilite: string = '';
  login: string = '';
  password: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.prenom = navigation.extras.state['prenom'];
      this.nom = navigation.extras.state['nom'];
      this.adresse = navigation.extras.state['adresse'];
      this.cp = navigation.extras.state['cp'];
      this.ville = navigation.extras.state['ville'];
      this.tel = navigation.extras.state['tel'];
      this.email = navigation.extras.state['email'];
      this.civilite = navigation.extras.state['civilite'];
      this.login = navigation.extras.state['login'];
      this.password = navigation.extras.state['password']; // If needed
    }
  }
}
