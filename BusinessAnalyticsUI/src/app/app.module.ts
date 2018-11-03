import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';

declare var require: any;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule.forRoot(require('highcharts')),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
