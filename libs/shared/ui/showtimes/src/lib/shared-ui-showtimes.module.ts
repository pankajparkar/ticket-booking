import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimesComponent } from './showtimes/showtimes.component';
import { PipesModule } from '@ticket-booking/shared/pipes';

@NgModule({
  declarations: [ShowtimesComponent],
  exports: [ShowtimesComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
})
export class SharedUiShowtimesModule { }
