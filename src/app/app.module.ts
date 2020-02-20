import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { BusinessOverviewComponent } from './components/business-overview/business-overview.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerOverviewComponent,
    BusinessOverviewComponent,
    LandingComponent,
    ProductOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
