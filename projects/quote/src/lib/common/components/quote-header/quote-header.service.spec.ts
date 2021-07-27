import { TestBed } from '@angular/core/testing';

import { QuoteHeaderService } from './quote-header.service';

describe('QuoteHeaderService', () => {
  let service: QuoteHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
