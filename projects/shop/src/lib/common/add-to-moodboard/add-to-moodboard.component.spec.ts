import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToMoodboardComponent } from './add-to-moodboard.component';

describe('AddToMoodboardComponent', () => {
  let component: AddToMoodboardComponent;
  let fixture: ComponentFixture<AddToMoodboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToMoodboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToMoodboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
