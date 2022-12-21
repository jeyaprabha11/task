import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { Home1Component } from '../userlogin/home1/home1.component';
import { Order1Component } from '../userlogin/order1/order1.component';
import { AdminloginComponent } from './adminlogin.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SalesComponent } from './sales/sales.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [{ path: '', component: AdminloginComponent ,
children:[{path:'home1',component:Home1Component},
{path:'order1',component:Order1Component},
{path:'sales',component:SalesComponent},
{path:'settings',component:SettingsComponent},
{path:'productdetails',component:ProductdetailsComponent}],canActivate:[AuthGuard]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminloginRoutingModule { }
