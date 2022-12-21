import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin.model';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminloginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3),]],
  });
admindetails!:Admin;
  constructor( private fb : FormBuilder,private commonService: CommonService,private router: Router) { }
 

  ngOnInit(): void {
    this.commonService.loginadmin().subscribe(response => {
      this.admindetails = response;
       console.log(response)
    });
  }
  adminlogin(){
    console.log(this.adminloginform.value)
    if (this.adminloginform.valid) {
      if (
        this.admindetails[0]?.email === this.adminloginform.get('email')?.value && this.admindetails[0]?.password === this.adminloginform.get('password')?.value
      ) {
        
       
        this. router. navigate(['/adminlogin']);
      }
      else {
        alert('Invalid data');
      }
    }
  }

}
