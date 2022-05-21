import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'ticket-booking-library';
import { MoviesSliderComponent } from './movies-slider/movies-slider.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    MoviesSliderComponent,
  ],
  exports: [
    MoviesSliderComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    CarouselModule,
  ],
})
export class MoviesUiSliderModule { }
