import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  prenom = '';
  nom = '';
  adresse = '';
  cp = '';
  ville = '';
  tel = '';
  email = '';
  civilite = '';
  login = '';
  password = '';

  @Output() formSubmitted = new EventEmitter<any>();

  onSubmit() {
    const clientData = {
      prenom: this.prenom,
      nom: this.nom,
      adresse: this.adresse,
      cp: this.cp,
      ville: this.ville,
      tel: this.tel,
      email: this.email,
      civilite: this.civilite,
      login: this.login,
      password: this.password,
    };

    this.formSubmitted.emit(clientData);
  }
}
