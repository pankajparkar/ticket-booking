import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesUiSearchModule } from '@ticket-booking/movies/ui/search';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MoviesUiSearchModule,
  ],
})
export class SharedUiNavbarModule { }
