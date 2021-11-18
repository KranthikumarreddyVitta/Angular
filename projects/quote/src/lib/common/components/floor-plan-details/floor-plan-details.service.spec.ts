import { TestBed } from '@angular/core/testing';

import { FloorPlanDetailsService } from './floor-plan-details.service';

describe('FloorPlanDetailsService', () => {
  let service: FloorPlanDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorPlanDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
