import { Injectable } from '@angular/core';

export class SavingResult {
  constructor(public month, public interest, public balance) {}
}

@Injectable()
export class CalculatorService {

  constructor() { }

  calculateSavings(amount, rate, year): any {
    let savingList = [];
    let result, balance, interest ;
    for (let i = 1; i <= (year * 12); i++) {
        interest = (amount) * ((rate / 10) / 12);
        balance = amount + interest;
        amount = balance;
        result = new SavingResult(i, interest.toFixed(2), balance.toFixed(2));
        savingList.push(result);
    }
        return savingList;
  }

}
