import { TestBed } from '@angular/core/testing';

import { InternalUserGuard } from './internal-user.guard';

describe('InternalUserGuard', () => {
  let guard: InternalUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InternalUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
