import { Component } from '@angular/core';
import { RentAffordabilityService } from './core/rent-affordability-calculator.service'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="form">
      <h1>Rent Affordability Calculator</h1>
      <h4>How much rent can I afford?</h4>
      <div class="row">
        <input #grossAnnualIncome type="number" placeholder="Gross annual income" (input)="monthlyRentResult = formatNumber(fromGrossAnnualIncome(toNumber(grossAnnualIncome.value)))">
        <div class="row__result">Monthly Rent: {{ monthlyRentResult }}</div>
      </div>
      <br>
      <div class="row">
        <h4>How much gross income would I need?</h4>
        <input #monthlyRent type="number" placeholder="Monthly rent" (input)="grossAnnualIncomeResult = formatNumber(totalGrossIncomeFromMonthlyRent(toNumber(monthlyRent.value)))">
        <div class="row__result">Gross annual income: {{ grossAnnualIncomeResult }}</div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  monthlyRentResult: string = "£0.00"
  grossAnnualIncomeResult: string = "£0.00"
  formatter: any

  constructor(private rentAffordabilityService: RentAffordabilityService) {}

  fromGrossAnnualIncome(annualIncome: number): number {
    return this.rentAffordabilityService.fromGrossAnnualIncome(annualIncome)
  }

  totalGrossIncomeFromMonthlyRent(monthlyRent: number): number {
    return this.rentAffordabilityService.fromMonthlyRent(monthlyRent)
  }

  toNumber(num: string): number {
    return Number(num)
  }

  formatNumber(num: number): string {
    return this.formatter.format(num)
  }

  ngOnInit() {
    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    })
  }
}
