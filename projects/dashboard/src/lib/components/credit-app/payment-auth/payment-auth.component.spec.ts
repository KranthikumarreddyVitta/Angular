import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAuthComponent } from './payment-auth.component';

describe('PaymentAuthComponent', () => {
  let component: PaymentAuthComponent;
  let fixture: ComponentFixture<PaymentAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
