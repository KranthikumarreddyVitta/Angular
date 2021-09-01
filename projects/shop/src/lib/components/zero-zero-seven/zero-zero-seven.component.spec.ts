import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroZeroSevenComponent } from './zero-zero-seven.component';

describe('ZeroZeroSevenComponent', () => {
  let component: ZeroZeroSevenComponent;
  let fixture: ComponentFixture<ZeroZeroSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeroZeroSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroZeroSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
