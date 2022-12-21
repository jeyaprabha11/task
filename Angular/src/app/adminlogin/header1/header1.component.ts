import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
 
  constructor(private commonService:CommonService,private router:Router) { }

  ngOnInit(): void {
   
    
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

