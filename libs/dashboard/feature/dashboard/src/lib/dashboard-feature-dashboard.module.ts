import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiSliderModule } from '@ticket-booking/movies/ui/slider';
import { RouterModule } from '@angular/router';

import { ChartsNumberChartModule } from '@ticket-booking/charts/number-chart';
import { ChartsVerticalBarChartModule } from '@ticket-booking/charts/vertical-bar-chart';

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    PipesModule,
    MoviesUiSliderModule,
    RouterModule,
    ChartsNumberChartModule,
    ChartsVerticalBarChartModule,
  ],
})
export class DashboardFeatureDashboardModule { }
