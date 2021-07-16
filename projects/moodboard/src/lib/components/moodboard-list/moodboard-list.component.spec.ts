import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodboardListComponent } from './moodboard-list.component';

describe('MoodboardListComponent', () => {
  let component: MoodboardListComponent;
  let fixture: ComponentFixture<MoodboardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoodboardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
