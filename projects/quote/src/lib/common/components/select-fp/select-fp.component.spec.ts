import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFpComponent } from './select-fp.component';

describe('SelectFpComponent', () => {
  let component: SelectFpComponent;
  let fixture: ComponentFixture<SelectFpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
