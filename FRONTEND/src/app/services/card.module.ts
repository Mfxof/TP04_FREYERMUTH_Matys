import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsformComponent } from '../components/body/cards/cards-form/cards-form.component';
import { CardsListComponent } from '../components/body/cards/cards-list/cards-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsService } from './cards.service';

@NgModule({
  declarations: [CardsformComponent, CardsListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [CardsService],
  exports: [CardsformComponent, CardsListComponent],
})
export class CarteModule {}
