import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userloginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3),]],
  });
  LoginDetails!: User;
  
  

  constructor( private fb : FormBuilder,private commonService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.commonService.loginuser().subscribe(response => {
      this.LoginDetails = response;
       console.log(response)
    });
   
  }
  userlogin(){
   
    
    console.log(this.userloginform.value);
   
 
  if (this.userloginform.valid) {
    if (
      this.LoginDetails[0]?.email === this.userloginform.get('email')?.value && this.LoginDetails[0]?.password === this.userloginform.get('password')?.value
    ) {
      
      this. router. navigate(['/userlogin']);
 }
 
 else {
      alert('Invalid data');
    }
  }
}
/*if (this.userloginform.valid) {
  if (
    this.LoginDetails[0]?.email === this.userloginform.get('email')?.value && this.LoginDetails[0]?.password === this.userloginform.get('password')?.value &&
    this.LoginDetails[0]?.email==='jeya@gmail.com')
  {
    
    this. router. navigate(['/adminlogin']);
    }
  else if( this.LoginDetails[0]?.email === this.userloginform.get('email')?.value && this.LoginDetails[0]?.password === this.userloginform.get('password')?.value &&
  this.LoginDetails[0]?.email==='john@gmail.com'){
    this. router. navigate(['/userlogin']);
  }
else{
      alert('invalid data');
     }
      
  }*/

    

  }



 






