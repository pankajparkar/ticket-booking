import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from 'ngx-bootstrap/modal';

import { InMemoryDataService, DatabaseService } from 'ticket-booking-library';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ManageShowtimesComponent } from './components/manage-showtimes/manage-showtimes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticalBarChartComponent } from './components/charts/vertical-bar-chart/vertical-bar-chart.component';
import { NumberChartComponent } from './components/charts/number-chart/number-chart.component';
import { SharedModule, PipesModule } from 'ticket-booking-library';

@NgModule({
  declarations: [
    AppComponent,
    MoviesSliderComponent,
    DashboardComponent,
    CollectionComponent,
    ManageShowtimesComponent,
    VerticalBarChartComponent,
    NumberChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    SharedModule,
    PipesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CarouselModule.forRoot(),
    NgxChartsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
