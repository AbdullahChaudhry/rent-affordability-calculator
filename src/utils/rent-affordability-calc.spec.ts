import { 
  fromGrossAnnualIncome,
  fromGrossMonthlyIncome,
  fromMonthlyRent
} from './rent-affordability-calc';

describe('RentAffordabilityCalculator', () => {
  
  describe('fromGrossAnnualIncome', () => {
    it('should calculate the maximum rent per month', () => {
      const returned = fromGrossAnnualIncome(18960)
      const expected = 632

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = fromGrossAnnualIncome(20000)
      const expected = 666.67

      expect(returned).toEqual(expected)
    })
  })

  describe('fromGrossMonthlyIncome', () => {
    it('should calculate the maximum rent per month', () => {
      const returned = fromGrossMonthlyIncome(1000)
      const expected = 400

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = fromGrossMonthlyIncome(1001)
      const expected = 400.40

      expect(returned).toEqual(expected)
    })
  })

  describe('fromMonthlyRent', () => {
    it('should calculate the total gross income required', () => {
      const returned = fromMonthlyRent(1000)
      const expected = 2500

      expect(returned).toEqual(expected)
    })

    it('should round to 2 decimal places', () => {
      const returned = fromMonthlyRent(1001)
      const expected = 2502.50

      expect(returned).toEqual(expected)
    })
  })
});
