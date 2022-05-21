import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { PipesModule, SharedModule } from '@ticket-booking/ticket-booking-library';
import { MoviesUiSliderModule } from '@ticket-booking/movies/ui/slider';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CollectionComponent],
  exports: [CollectionComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    MoviesUiSliderModule,
    RouterModule,
  ],
})
export class CollectionFeatureCollectionModule { }
