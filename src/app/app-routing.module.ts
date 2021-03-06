import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerOverviewComponent } from './components/customer-overview/customer-overview.component';
import { BusinessOverviewComponent } from './components/business-overview/business-overview.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';


const routes: Routes = [
  { path: 'customer-overview', component: CustomerOverviewComponent },
  { path: 'business-overview', component: BusinessOverviewComponent },
  { path: 'product-overview', component: ProductOverviewComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
