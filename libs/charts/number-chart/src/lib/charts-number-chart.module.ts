import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NumberChartComponent } from './number-chart/number-chart.component';

@NgModule({
  declarations: [
    NumberChartComponent,
  ],
  exports: [
    NumberChartComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ],
})
export class ChartsNumberChartModule { }
