import { TestBed } from '@angular/core/testing';

import { ProductresolverGuard } from './productresolver.guard';

describe('ProductresolverGuard', () => {
  let guard: ProductresolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductresolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
