import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../../../services/cards.service';
import { Card } from '../../../../services/card';
import { CardsListComponent } from '../cards-list/cards-list.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardsListComponent],
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.css'],
})
export class CardsformComponent implements OnInit {
  cardForm: FormGroup;
  maskedCardNumber: string = '';

  constructor(private fb: FormBuilder, private cardsService: CardsService) {
    const anneeCourante = new Date().getFullYear() % 100;
    {
      this.cardForm = this.fb.group({
        cardHolderName: [
          '',
          [
            Validators.required,
            Validators.pattern("[a-zA-Z\\-\\s']*"),
            this.twoWordsValidator(),
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        ],
        cardNumber: [
          '',
          [
            Validators.required,
            this.cardNumberValidator(),
            Validators.pattern(/^[0-9]{4}(\s[0-9]{4}){3}$/),
            this.cardPrefixValidator(),
            Validators.minLength(19), // ou 16 - Je doit aussi compter les espaces vsd
            Validators.maxLength(19),
          ],
        ],
        expiryDate: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/),
            this.expiryDateValidator(),
          ],
        ],
        cardCVV: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
      });

      this.cardForm.get('cardNumber')?.valueChanges.subscribe((value) => {
        this.updateMaskedCardNumber(value);
      });
    }
  }

  private twoWordsValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value) {
        const words = value
          .split(' ')
          .filter((word: string) => word.length > 0);
        if (words.length !== 2) {
          return { twoWords: 'Il faut 2  mots !' };
        }
      }
      return null;
    };
  }

  private updateMaskedCardNumber(value: string) {
    if (!value) {
      this.maskedCardNumber = 'XXXX XXXX XXXX XXXX';
      return;
    }
    const numbers = value.replace(/\s/g, '');
    if (numbers.length >= 16) {
      const firstSix = numbers.slice(0, 4);
      const lastFour = numbers.slice(-4);
      const middle = '**** ****';
      this.maskedCardNumber = `${firstSix
        .match(/.{1,4}/g)
        ?.join(' ')} ${middle} ${lastFour}`;
    } else {
      this.maskedCardNumber = numbers.match(/.{1,4}/g)?.join(' ') || '';
    }
  }

  ngOnInit(): void {}

  private cardNumberValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const cardNumber = value.replace(/\s/g, '');

      if (cardNumber.length !== 16) {
        return { invalidLength: true };
      }

      let sum = 0;
      let isEven = false;

      for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (isEven) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }

        sum += digit;
        isEven = !isEven;
      }

      if (sum % 10 !== 0) {
        return { invalidChecksum: true };
      }

      const cardPatterns = {
        visa: /^4/,
        mastercard: /^5[1-5]/,
        amex: /^3[47]/,
        discover: /^6(?:011|5)/,
      };

      if (
        !Object.values(cardPatterns).some((pattern) => pattern.test(cardNumber))
      ) {
        return { invalidPrefix: true };
      }

      return null;
    };
  }

  private cardPrefixValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }

      const cardNumber = value.replace(/\s/g, '');

      const validPrefix = /^[45]/.test(cardNumber);

      if (!validPrefix) {
        return { invalidPrefix: true };
      }

      return null;
    };
  }

  private expiryDateValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const [month, year] = control.value.split('/');
      const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
      const today = new Date();

      if (expiry < today) {
        return { expiredCard: true };
      }
      return null;
    };
  }

  formatCardNumber(event: any): void {
    let value = event.target.value.replace(/\s/g, '');
    if (value.length > 0) {
      value = value.match(new RegExp('.{1,4}', 'g'))?.join(' ') || '';
    }
    event.target.value = value;
  }

  formatExpiryDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    event.target.value = value;
  }

  onSubmit(): void {
    //console.log(this.cardForm.valid);
    if (this.cardForm.valid) {
      const formValues = this.cardForm.value;
      const nouvelleCarte: Card = {
        name: formValues.cardHolderName,
        code: formValues.cardNumber,
        ccv: parseInt(formValues.cardCVV, 10),
        month: parseInt(formValues.expiryDate.split('/')[0], 10),
        years: parseInt(formValues.expiryDate.split('/')[1], 10),
      };

      this.cardsService.addCarte(nouvelleCarte);
      this.cardForm.reset();
      this.maskedCardNumber = '';
    } else {
      Object.keys(this.cardForm.controls).forEach((key) => {
        const control = this.cardForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
