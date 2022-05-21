import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { PipesModule } from '@ticket-booking/shared/pipes';

@NgModule({
  declarations: [
    MovieSearchComponent,
  ],
  exports: [
    MovieSearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
})
export class MoviesUiSearchModule { }
