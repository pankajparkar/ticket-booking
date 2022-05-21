import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesUiPreviewCardModule } from '@ticket-booking/movies/ui/preview-card';
import { MoviesGridComponent } from './movies-grid/movies-grid.component';


@NgModule({
  declarations: [
    MoviesGridComponent,
  ],
  exports: [
    MoviesGridComponent,
  ],
  imports: [
    CommonModule,
    MoviesUiPreviewCardModule,
  ],
})
export class MoviesUiGridModule { }
