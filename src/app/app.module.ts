import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputDataComponent } from './input-data/input-data.component';
import { OutputDataComponent } from './output-data/output-data.component';
import { CalculatorService } from './calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    OutputDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
