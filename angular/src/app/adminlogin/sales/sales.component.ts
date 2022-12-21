import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  SalesDetail !:Array<any>;
  constructor(private commonService: CommonService,private router: Router) { }

  ngOnInit(): void {
      this.commonService.SalesDetails().subscribe((response) =>{
      console.log(response);
      this.SalesDetail=response;
  })
  }

}

