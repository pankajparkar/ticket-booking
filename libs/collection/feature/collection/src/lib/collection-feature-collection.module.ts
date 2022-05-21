import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { SharedUiGoldenTextModule } from '@ticket-booking/shared/ui/golden-text';
import { MoviesUiDetailsCardModule } from '@ticket-booking/movies/ui/details-card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CollectionComponent],
  exports: [CollectionComponent],
  imports: [
    CommonModule,
    SharedUiGoldenTextModule,
    RouterModule,
    MoviesUiDetailsCardModule,
  ],
})
export class CollectionFeatureCollectionModule { }
