import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';
import { UserloginComponent } from './userlogin.component';
import { Home1Component } from './home1/home1.component';
import { Order1Component } from './order1/order1.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    UserloginComponent,
    Home1Component,
    Order1Component,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    UserloginRoutingModule
  ]
})
export class UserloginModule { }
