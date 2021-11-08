import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFPComponent } from './add-fp.component';

describe('AddFPComponent', () => {
  let component: AddFPComponent;
  let fixture: ComponentFixture<AddFPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
