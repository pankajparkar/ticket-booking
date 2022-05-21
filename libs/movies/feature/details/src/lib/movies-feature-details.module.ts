import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PipesModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiDetailsCardModule } from '@ticket-booking/movies/ui/details-card';
import { MoviesUiGridModule } from '@ticket-booking/movies/ui/grid';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
    MoviesUiDetailsCardModule,
    MoviesUiGridModule,
  ],
})
export class MoviesFeatureDetailsModule { }
