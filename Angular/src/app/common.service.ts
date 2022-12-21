import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay, Subject } from 'rxjs';
import { Log } from './log';
import { Login } from './login.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
//showme :boolean=false;



  constructor(private http: HttpClient,private router:Router) {

   }
   loginuser(){
    return this.http.get<Array<any>>('https://localhost:7160/api/Userlogin');
   }
   loginadmin(){
    return this.http.get<Array<any>>('https://localhost:7288/api/Admin');
   }
   /*login(email:string,password:string){
    return this.http.post<any>('https://localhost:7141/api/Login',{email,password});
   
    };*/
    /*login(email:string,password:string){
           return this.http.post<User>('https://localhost:7141/api/Login',{email,password})
           
    }*/
    /*login(loginobj:any){
      return this.http.post('https://localhost:7141/api/Login',loginobj,{responseType: 'text'});

    }*/
    login(usercred:any){
          return this.http.post('https://localhost:7096/api/Login',usercred,{responseType: 'text'});
    }
    productdetails(){
      return this.http.get<Array<any>>('https://localhost:7096/api/Values/productdetails');
    }
    SalesDetails(){
      return this.http.get<Array<any>>('https://localhost:7096/api/Values/sales');
    }

   Orders(){
      return this.http.get<Array<any>>('https://localhost:7096/api/Values/order');
    }
    IsLoggedIn(){
      return localStorage.getItem('token')!=null;
    }
  /*  HaveAccess(){
      var loggintoken=localStorage.getItem('token')||'';
      var _extractedtoken=loggintoken.split('.')[1];
      var _atobdata=atob(_extractedtoken);
      var _finaldata=JSON.parse(_atobdata);
      if(_finaldata.role=='admin'){
      
        return true;
      }
       alert('you not having access');
      return false;
     
    }*/
    /*GetToken(){
      return localStorage.getItem("token")||'';
    }
    tokenresp:any;
    GetRolebyToken(token:any){
      let _token=token.split('.')[1];
      this.tokenresp=JSON.parse(atob(_token))
      //console.log(this.tokenresp);
      return this.tokenresp.role;
       }
       private _updatemenu =new Subject<void>();
       get updatemenu()
{
  return this._updatemenu;
}   }*/
}

