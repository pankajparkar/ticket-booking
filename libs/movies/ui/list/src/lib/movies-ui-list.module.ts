import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule } from '@angular/router';

import { PipesModule } from '@ticket-booking/shared/pipes';
import { SharedUiShowtimesModule } from '@ticket-booking/shared/ui/showtimes';

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
    SharedUiShowtimesModule,
  ],
})
export class MoviesUiListModule { }
