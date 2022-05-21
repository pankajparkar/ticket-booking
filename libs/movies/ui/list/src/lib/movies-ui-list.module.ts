import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule, SharedModule } from '@ticket-booking/ticket-booking-library';
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
    SharedModule,
    PipesModule,
    RouterModule,
  ],
})
export class MoviesUiListModule { }
