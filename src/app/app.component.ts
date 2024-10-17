import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component'; 

@Component({
  selector: 'app-root',
  template: `
    <app-form (formSubmitted)="onFormSubmit($event)"></app-form>
    <app-summary *ngIf="formSubmittedData" [clientData]="formSubmittedData"></app-summary>
  `,
  standalone: true,
  imports: [FormComponent, SummaryComponent],
})
export class AppComponent {
  formSubmittedData: any;

  onFormSubmit(data: any) {
    this.formSubmittedData = data;
  }
}
