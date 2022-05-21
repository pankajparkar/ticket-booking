import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@ticket-booking/shared/pipes';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesListComponent,
  ],
  exports: [
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule,
  ],
})
export class MoviesUiListModule { }
