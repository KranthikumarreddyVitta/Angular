import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToQuoteComponent } from './add-to-quote.component';

describe('AddToQuoteComponent', () => {
  let component: AddToQuoteComponent;
  let fixture: ComponentFixture<AddToQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
