import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-order1',
  templateUrl: './order1.component.html',
  styleUrls: ['./order1.component.css']
})
export class Order1Component implements OnInit {

  order !:Array<any>;
  constructor(private commonService: CommonService,private router: Router) { }

  ngOnInit(): void {
    this.commonService.Orders().subscribe((response) =>{
      console.log(response);
      this.order=response;
  })
  }
}
