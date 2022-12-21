import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

import { UserloginComponent } from './userlogin/userlogin.component';
import { UserloginModule } from './userlogin/userlogin.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-project';
 
 

  

  constructor(private router: Router,private bnIdle: BnNgIdleService) {
    this.bnIdle.startWatching(300).subscribe((res) => {
      if(res) {
          this.router.navigateByUrl('/');
          //console.log('session expired');
      }
    })
   
  }
url(route: string) {
    return this.router.url.includes(route);
}




  
 
}
