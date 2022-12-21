import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { CommonService } from '../common.service';
import { Log } from '../log';
import { Login,  } from '../login.model';
import { User } from '../user.model';
import {  OnDestroy } from '@angular/core';
import {  MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginform:FormGroup;
  responsedata:any;
  //isIframe = false;
  //loginDisplay = false;
  //logindetails!:User;
   
  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3),]],
  });

  constructor( private fb : FormBuilder,private commonService: CommonService,private router: Router,private http:HttpClient
  ) {
      
      
     }
  

  ngOnInit(): void {
    
   
  }
 

  login(){
    if(this.loginform.valid){
      this.commonService.login(this.loginform.value).subscribe(result =>{
       
   
       
          if(result!=null){
            if(this.loginform.get('email')?.value==='jeya@gmail.com'&& this.loginform.get('password')?.value==='jeya123'){
        
        this.responsedata=result;
      localStorage.setItem('token',this.responsedata);
        //this.commonService.updatemenu.next();
         this.router.navigate(['/adminlogin']);}
         else{
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata);
          this.router.navigate(['/userlogin']);
         }
        }
          
      })
    }



  
   
    
  
    /*if (this.loginform.valid) {
      this.commonService.login(this.loginform.value).subscribe(response => {
        this.logindetails= response;
       
           console.log(response)
        });
      if (
        this.logindetails[0]?.email === this.loginform.get('email')?.value && this.logindetails[0]?.password === this.loginform.get('password')?.value
    && this.logindetails[0]?.role==='admin' ) {
     // localStorage.setItem('token',this.logindetails);
      this. router. navigate(['/adminlogin']);
    }
  else {
             this.router.navigate(['/userlogin']);
      }
      
    }*/

 
      
    

}
}
