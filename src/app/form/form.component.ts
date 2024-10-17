import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [FormsModule] // Add FormsModule to imports
})
export class FormComponent {
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

  constructor(private router: Router) {}

onSubmit(event: Event) {
  event.preventDefault();
  console.log("Form submitted with data:", {
    prenom: this.prenom,
    nom: this.nom,
    adresse: this.adresse,
    cp: this.cp,
    ville: this.ville,
    tel: this.tel,
    email: this.email,
    civilite: this.civilite,
    login: this.login,
    password: this.password
  });
  this.router.navigate(['recapitulatif'], { state: { 
    prenom: this.prenom,
    nom: this.nom,
    adresse: this.adresse,
    cp: this.cp,
    ville: this.ville,
    tel: this.tel,
    email: this.email,
    civilite: this.civilite,
    login: this.login,
    password: this.password
  }});
}

}