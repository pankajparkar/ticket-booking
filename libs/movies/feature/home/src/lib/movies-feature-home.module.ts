import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule, PipesModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiSliderModule } from '@ticket-booking/movies/ui/slider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    MoviesUiSliderModule,
    RouterModule,
  ],
})
export class MoviesFeatureHomeModule { }
