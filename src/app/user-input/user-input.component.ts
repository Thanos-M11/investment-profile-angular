import { Component, EventEmitter, output, signal } from '@angular/core';
import { type InvestmentData } from '../investment-results/investment-results.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentData>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment()),
      annualInvestment: Number(this.enteredAnnualInvestment()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      duration: Number(this.enteredDuration()),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
