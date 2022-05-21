import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule, SharedModule } from 'ticket-booking-library';
import { ManageShowtimesComponent } from './manage-showtimes/manage-showtimes.component';

@NgModule({
  declarations: [
    ManageShowtimesComponent,
  ],
  exports: [
    ManageShowtimesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
  ],
})
export class ShowtimesFeaturesManageModule { }
