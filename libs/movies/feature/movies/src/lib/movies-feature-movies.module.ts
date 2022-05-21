import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { PipesModule, SharedModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiListModule } from '@ticket-booking/movies/ui/list';

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
    MoviesUiListModule,
  ],
})
export class MoviesFeatureMoviesModule { }
