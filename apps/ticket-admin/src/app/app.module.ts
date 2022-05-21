import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from 'ngx-bootstrap/modal';

import { InMemoryDataService, DatabaseService } from '@ticket-booking/ticket-booking-library';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PipesModule } from '@ticket-booking/ticket-booking-library';
import { SharedUiNavbarModule } from '@ticket-booking/shared/ui/navbar';
import { SharedUiFooterModule } from '@ticket-booking/shared/ui/footer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedUiNavbarModule,
    SharedUiFooterModule,
    ModalModule.forRoot(),
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
