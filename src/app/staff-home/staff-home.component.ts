import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent implements OnInit {

  
  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  
  address:any;
  houseNo:"";
  city:"";
  state:"";
  pincode:"";

  constructor(public service : DataService, public router:Router) 
  { this.getAddressData(this.staffOwn.id) }

  getAddressData(id)
  {
    console.log(id);
    this.service.getAddressDataStaff(id).subscribe((res)=>{
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
