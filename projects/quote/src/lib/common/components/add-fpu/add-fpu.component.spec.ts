import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFPUComponent } from './add-fpu.component';

describe('AddFPUComponent', () => {
  let component: AddFPUComponent;
  let fixture: ComponentFixture<AddFPUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFPUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFPUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
