import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MoviePreviewCardComponent } from './movie-preview-card/movie-preview-card.component';

@NgModule({
  declarations: [
    MoviePreviewCardComponent,
  ],
  exports: [
    MoviePreviewCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
  ],
})
export class MoviesUiPreviewCardModule { }
