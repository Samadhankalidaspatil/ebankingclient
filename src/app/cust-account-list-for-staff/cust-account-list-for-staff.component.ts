import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cust-account-list-for-staff',
  templateUrl: './cust-account-list-for-staff.component.html',
  styleUrls: ['./cust-account-list-for-staff.component.css']
})
export class CustAccountListForStaffComponent implements OnInit {
  
  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
 
  accountDetails:any;
  constructor(public service:DataService) 
  { 
    this.accountDetail();
  }


  accountDetail()
  {

    this.service.accountDetails().subscribe((res)=>
    {
      console.log(res);
      this.accountDetails=res;
    },(error)=>
    {
      console.log(error)
    })
  }

  ngOnInit() {
  }


}
