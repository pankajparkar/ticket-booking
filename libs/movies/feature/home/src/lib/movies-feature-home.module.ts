import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule, PipesModule } from '@ticket-booking/ticket-booking-library';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule
  ],
})
export class MoviesFeatureHomeModule { }
