import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormHeaderComponent } from './create-form-header.component';

describe('CreateFormHeaderComponent', () => {
  let component: CreateFormHeaderComponent;
  let fixture: ComponentFixture<CreateFormHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
