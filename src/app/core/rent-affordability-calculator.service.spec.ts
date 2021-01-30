import { TestBed } from '@angular/core/testing';

import { RentAffordabilityService } from './rent-affordability-calculator.service';

describe('RentAffordabilityCalculatorService', () => {
  let service: RentAffordabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentAffordabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
