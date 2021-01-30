import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentAffordabilityService {

  constructor() { }

  fromGrossMonthlyIncome(monthlyIncome: number): number {
    return parseFloat( (monthlyIncome / 2.5).toFixed(2) )
  }
  
  fromGrossAnnualIncome(annualIncome: number): number {
    return parseFloat( (annualIncome / 30).toFixed(2) )
  }
  
  fromMonthlyRent(monthlyRent: number): number {
    return parseFloat( ( monthlyRent * 30 ).toFixed(2) )
  }
}
