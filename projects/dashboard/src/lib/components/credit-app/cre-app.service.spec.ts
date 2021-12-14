import { TestBed } from '@angular/core/testing';

import { CreAppService } from './cre-app.service';

describe('CreAppService', () => {
  let service: CreAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
