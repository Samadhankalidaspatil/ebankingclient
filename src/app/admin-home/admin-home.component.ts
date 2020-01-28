import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  admin:any=JSON.parse(sessionStorage.getItem("user"))
  
  address:any;
  houseNo:"";
  city:"";
  state:"";
  pincode:"";

  constructor(public service : DataService, public router:Router) 
  { this.getAddressD(this.admin.id) }

  getAddressD(id)
  {
    console.log(id);
    this.service.getAddressDataOfAdmin(id).subscribe((res)=>{
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
