import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'angular2-highcharts';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StockAnalysisComponent } from './products/stock-analysis/stock-analysis.component';
import { CustomerAnalysisComponent } from './products/customer-analysis/customer-analysis.component';
import { StatsBoxComponent } from './shared/components/stats-box/stats-box.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';

declare var require: any;
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    StockAnalysisComponent,
    CustomerAnalysisComponent,
    StatsBoxComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ChartModule.forRoot(require('highcharts')),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
