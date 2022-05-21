import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule, SharedModule } from '@ticket-booking/ticket-booking-library';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  exports: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    RouterModule,
  ],
})
export class MoviesFeatureMoviesModule { }
