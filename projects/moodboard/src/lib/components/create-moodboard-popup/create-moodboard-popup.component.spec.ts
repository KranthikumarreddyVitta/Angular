import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMoodboardPopupComponent } from './create-moodboard-popup.component';

describe('CreateMoodboardPopupComponent', () => {
  let component: CreateMoodboardPopupComponent;
  let fixture: ComponentFixture<CreateMoodboardPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMoodboardPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMoodboardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
