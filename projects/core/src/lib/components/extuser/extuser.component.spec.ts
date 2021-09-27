import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtuserComponent } from './extuser.component';

describe('ExtuserComponent', () => {
  let component: ExtuserComponent;
  let fixture: ComponentFixture<ExtuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
