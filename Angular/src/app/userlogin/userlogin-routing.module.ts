import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { Home1Component } from './home1/home1.component';
import { Order1Component } from './order1/order1.component';
import { UserloginComponent } from './userlogin.component';

const routes: Routes = [{ path: '', component: UserloginComponent,children:[{path:'home1',component:Home1Component},
{path:'order1',component:Order1Component},],canActivate:[AuthGuard]

}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserloginRoutingModule { }

