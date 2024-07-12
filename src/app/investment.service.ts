import { Injectable } from '@angular/core';
import {
  InvestmentResults,
  type InvestmentData,
} from './investment-results/investment-results.model';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  resultsData?: InvestmentResults[];

  calculateInvestmentResults(data: InvestmentData) {
    const { initialInvestment, expectedReturn, annualInvestment, duration } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
