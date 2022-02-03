import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseroutingComponent } from './baserouting.component';

describe('BaseroutingComponent', () => {
  let component: BaseroutingComponent;
  let fixture: ComponentFixture<BaseroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseroutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
