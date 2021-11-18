import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlanComponent } from './floor-plan-unit.component';

describe('FloorPlanComponent', () => {
  let component: FloorPlanComponent;
  let fixture: ComponentFixture<FloorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
