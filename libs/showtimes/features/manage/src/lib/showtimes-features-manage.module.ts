import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '@ticket-booking/shared/pipes';
import { ManageShowtimesComponent } from './manage-showtimes/manage-showtimes.component';
import { SharedUiShowtimesModule } from '@ticket-booking/shared/ui/showtimes';
import { MoviesUiPreviewCardModule } from '@ticket-booking/movies/ui/preview-card';

@NgModule({
  declarations: [
    ManageShowtimesComponent,
  ],
  exports: [
    ManageShowtimesComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    SharedUiShowtimesModule,
    MoviesUiPreviewCardModule,
  ],
})
export class ShowtimesFeaturesManageModule { }
