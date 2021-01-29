function fromGrossMonthlyIncome(monthlyIncome: number): number {
  return parseFloat( (monthlyIncome / 2.5).toFixed(2) )
}

function fromGrossAnnualIncome(annualIncome: number): number {
  return parseFloat( (annualIncome / 30).toFixed(2) )
}

function fromMonthlyRent(monthlyRent: number): number {
  return parseFloat( ( monthlyRent * 2.5 ).toFixed(2) )
}

export {
  fromGrossAnnualIncome,
  fromGrossMonthlyIncome,
  fromMonthlyRent,
}
