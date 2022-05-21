import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@ticket-booking/movies/feature/home';
import { MoviesComponent } from '@ticket-booking/movies/feature/movies';
import { MovieDetailComponent } from '@ticket-booking/movies/feature/details';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellBookMyTicketModule { }

@NgModule({
  imports: [CommonModule],
})
export class ShellBookMyCinemaModule { }
