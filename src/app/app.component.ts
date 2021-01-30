import { Component } from '@angular/core';
import { RentAffordabilityService } from './core/rent-affordability-calculator.service'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="form">
      <h1>Rent Affordability Calculator</h1>
      <p>How much rent can I afford?</p>

      <div class="row">
        <input #textbox type="number" placeholder="Gross annual income" (input)="textValue = formatNumber(fromGrossAnnualIncome(toNumber(textbox.value)))">
        <div class="row__result">Monthly Rent: {{ textValue }}</div>
      </div>

      <br>

      <div class="row">
        <input #textbox2 type="number" placeholder="Gross monthly income" (input)="textValue2 = formatNumber(fromGrossMonthlyIncome(toNumber(textbox2.value)))">
        <div class="row__result">Monthly Rent: {{ textValue2 }}</div>
      </div>

      <br>

      <p>Or</p>

      <div class="row">
        <p>How much gross income would I need?</p>
        <input #textbox3 type="number" placeholder="Monthly Rent" (input)="textValue3 = formatNumber(totalGrossIncomeFromMonthlyRent(toNumber(textbox3.value)))">
        <div class="row__result">Gross annual income: {{ textValue3 }}</div>
      </div>

      <div>Gross monthly income: {{ formatNumber(unformat(textValue3) / 12 ) }}</div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textValue: string = "£0.00"
  textValue2: string = "£0.00"
  textValue3: string = "£0.00"
  formatter: any

  constructor(private rentAffordabilityService: RentAffordabilityService) {}

  fromGrossAnnualIncome(annualIncome: number): number {
    return this.rentAffordabilityService.fromGrossAnnualIncome(annualIncome)
  }

  fromGrossMonthlyIncome(monthlyIncome: number): number {
    return this.rentAffordabilityService.fromGrossMonthlyIncome(monthlyIncome)
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

  unformat(num: string): number {
    return Number(num.replace(/£/g, "").replace(/,/g, ""))
  }

  

  ngOnInit() {
    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'GBP'
    })
  }
}
