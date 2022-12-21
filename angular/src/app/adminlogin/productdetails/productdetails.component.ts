import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private commonService: CommonService,private router: Router) { }
ProductDetail !:Array<any>;
  ngOnInit(): void {
  this.commonService.productdetails().subscribe((response) =>{
      console.log(response);
      this.ProductDetail=response;
  })
  }


}
