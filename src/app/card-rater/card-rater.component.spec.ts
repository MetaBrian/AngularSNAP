import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRaterComponent } from './card-rater.component';

describe('CardRaterComponent', () => {
  let component: CardRaterComponent;
  let fixture: ComponentFixture<CardRaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRaterComponent]
    });
    fixture = TestBed.createComponent(CardRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
