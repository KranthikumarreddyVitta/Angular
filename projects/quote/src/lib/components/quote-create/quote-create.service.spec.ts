import { TestBed } from '@angular/core/testing';

import { QuoteCreateService } from './quote-create.service';

describe('QuoteCreateService', () => {
  let service: QuoteCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
