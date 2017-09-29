import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../calculator.service';



@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  public amount: number;
  public percent: number;
  public years: number;
  public results: [object];
  public clearTable: boolean;

  constructor(private calculateResult: CalculatorService) { }

  ngOnInit() {
    this.clearSavings();
  }
  clearSavings(): void {
    this.amount = null;
    this.percent = null;
    this.years = null;
    this.clearTable = true;
  }

  calculateSavings(): void {
  this.clearTable = false;
  this.results = this.calculateResult.calculateSavings(this.amount, this.percent, this.years);
  }
}
