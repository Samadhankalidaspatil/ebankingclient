import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  customer:any=JSON.parse(sessionStorage.getItem("user"))

  address:any;
  houseNo:"";
  city:"";
  state:"";
  pincode:"";

  constructor(public service : DataService, public router:Router) 
  { this.getAddressData(this.customer.id) }

  getAddressData(id)
  {
    console.log(id);
    this.service.getAddressData(id).subscribe((res)=>{
      console.log("addr is here");
      console.log(res);
      this.address=res;
      this.houseNo=this.address.houseNo;
      this.city=this.address.city;
      this.state=this.address.state;
      this.pincode=this.address.pincode;
    })
  }
  ngOnInit() {
  }

}
