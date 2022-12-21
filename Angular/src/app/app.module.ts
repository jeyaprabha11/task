import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BnNgIdleService } from 'bn-ng-idle';
import { MsalModule ,MsalRedirectComponent} from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { RouterModule } from '@angular/router';






@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
