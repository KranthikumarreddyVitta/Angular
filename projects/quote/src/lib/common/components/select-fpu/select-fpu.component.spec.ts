import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFpuComponent } from './select-fpu.component';

describe('SelectFpuComponent', () => {
  let component: SelectFpuComponent;
  let fixture: ComponentFixture<SelectFpuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFpuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFpuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
