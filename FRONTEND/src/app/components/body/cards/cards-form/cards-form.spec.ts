import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsManagerComponent } from './cards-form.component';

describe('CardsManagerComponent', () => {
  let component: CardsManagerComponent;
  let fixture: ComponentFixture<CardsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
