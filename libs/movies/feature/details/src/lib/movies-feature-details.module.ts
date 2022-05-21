import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PipesModule, SharedModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiSliderModule } from '@ticket-booking/movies/ui/slider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    MoviesUiSliderModule,
    RouterModule,
  ],
})
export class MoviesFeatureDetailsModule { }
