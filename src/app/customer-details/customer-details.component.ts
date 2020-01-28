import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  admin:any=JSON.parse(sessionStorage.getItem("user"))
  cust:any;
  constructor(public service:DataService) 
  { 
    this.getCustData();
  }


  getCustData()
  {

    this.service.getCustData().subscribe((res)=>
    {
      console.log(res);
      this.cust=res;
    },(error)=>
    {
      console.log(error)
    })
  }

  ngOnInit() {
  }

}
