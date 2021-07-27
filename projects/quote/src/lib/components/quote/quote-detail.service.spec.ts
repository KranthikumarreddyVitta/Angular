import { TestBed } from '@angular/core/testing';

import { QuoteDetailService } from './quote-detail.service';

describe('QuoteDetailService', () => {
  let service: QuoteDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
