import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsformComponent } from './cards-form.component';

describe('CardsManagerComponent', () => {
  let component: CardsformComponent;
  let fixture: ComponentFixture<CardsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
