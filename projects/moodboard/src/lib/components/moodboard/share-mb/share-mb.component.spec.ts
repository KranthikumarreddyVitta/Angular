import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMBComponent } from './share-mb.component';

describe('ShareMBComponent', () => {
  let component: ShareMBComponent;
  let fixture: ComponentFixture<ShareMBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareMBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
