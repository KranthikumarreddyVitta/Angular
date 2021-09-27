import { TestBed } from '@angular/core/testing';

import { ExtuserService } from './extuser.service';

describe('ExtuserService', () => {
  let service: ExtuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
