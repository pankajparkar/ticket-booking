import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
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
    RouterModule,
    MoviesUiListModule,
  ],
})
export class MoviesFeatureMoviesModule { }
