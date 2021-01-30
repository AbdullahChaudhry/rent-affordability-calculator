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

  describe('fromGrossAnnualIncome', () => {
    it('should calculate the maximum rent per month', () => {
      const returned = service.fromGrossAnnualIncome(18960)
      const expected = 632

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = service.fromGrossAnnualIncome(20000)
      const expected = 666.67

      expect(returned).toEqual(expected)
    })
  })

  describe('fromGrossMonthlyIncome', () => {
    it('should calculate the maximum rent per month', () => {
      const returned = service.fromGrossMonthlyIncome(1000)
      const expected = 400

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = service.fromGrossMonthlyIncome(1001)
      const expected = 400.40

      expect(returned).toEqual(expected)
    })
  })

  describe('fromMonthlyRent', () => {
    it('should calculate the total gross income required', () => {
      const returned = service.fromMonthlyRent(1000)
      const expected = 30000

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = service.fromMonthlyRent(1001)
      const expected = 30030

      expect(returned).toEqual(expected)
    })
  })
});
