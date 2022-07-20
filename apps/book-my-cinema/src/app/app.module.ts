import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PipesModule } from '@ticket-booking/shared/pipes';
import { DatabaseService, InMemoryDataService } from '@ticket-booking/shared/services';
import { SharedUiNavbarModule } from '@ticket-booking/shared/ui/navbar';
import { SharedUiFooterModule } from '@ticket-booking/shared/ui/footer';
import { ShellBookMyTicketModule } from '@ticket-booking/shell/book-my-cinema'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellBookMyTicketModule,
    SharedUiFooterModule,
    SharedUiNavbarModule,
    ModalModule.forRoot(),
    PipesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CarouselModule.forRoot(),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
