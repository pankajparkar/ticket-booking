import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '@ticket-booking/dashboard/feature/dashboard';
import { CollectionComponent } from '@ticket-booking/collection/feature/collection';
import { ManageShowtimesComponent } from '@ticket-booking/showtimes/features/manage';
import { MovieDetailComponent } from '@ticket-booking/movies/feature/details';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'manage-showtimes', component: ManageShowtimesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShellTicketAdminModule { }
