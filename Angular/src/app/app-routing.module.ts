import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { BrowserUtils } from '@azure/msal-browser';
import { UserComponent } from './user/user.component';





const routes: Routes = [
  {path:'user',component:UserComponent},
  {path:'admin',component:AdminComponent},
  { path: 'userlogin',loadChildren: () => import('./userlogin/userlogin.module').then(m => m.UserloginModule),canActivate:[AuthGuard]},
  { path: 'adminlogin', loadChildren: () => import('./adminlogin/adminlogin.module').then(m => m.AdminloginModule)},
   {path:'login',component:LoginComponent}
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{      
   
   
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
