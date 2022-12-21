import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminloginComponent } from './adminlogin.component';
import { SettingsComponent } from './settings/settings.component';
import { SalesComponent } from './sales/sales.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { Header1Component } from './header1/header1.component';


@NgModule({
  declarations: [
    AdminloginComponent,
    SettingsComponent,
    SalesComponent,
    ProductdetailsComponent,
    Header1Component
  ],
  imports: [
    CommonModule,
    AdminloginRoutingModule
  ]
})
export class AdminloginModule { }
