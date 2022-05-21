import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@ticket-booking/shared/pipes';
import { MovieDetailsCardComponent } from './movie-details-card/movie-details-card.component';
import { SharedUiShowtimesModule } from '@ticket-booking/shared/ui/showtimes';

@NgModule({
  declarations: [MovieDetailsCardComponent],
  exports: [MovieDetailsCardComponent],
  imports: [
    CommonModule,
    PipesModule,
    SharedUiShowtimesModule,
  ],
})
export class MoviesUiDetailsCardModule { }
