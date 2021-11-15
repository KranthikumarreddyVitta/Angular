import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoodboardQuoteComponent } from './add-moodboard-quote.component';

describe('AddMoodboardQuoteComponent', () => {
  let component: AddMoodboardQuoteComponent;
  let fixture: ComponentFixture<AddMoodboardQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoodboardQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoodboardQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
