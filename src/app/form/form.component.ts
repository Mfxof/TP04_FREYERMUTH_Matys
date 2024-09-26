import { Component } from '@angular/core';
import { FormsModule} from '@angular/Forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nom : String = "Tu valide le JS ?";
  valid : boolean = false;
  onSubmit(){
    this.valid = !this.valid;
  }

}
