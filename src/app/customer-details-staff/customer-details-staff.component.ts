import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { empty } from 'rxjs';
import { noConflict } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details-staff',
  templateUrl: './customer-details-staff.component.html',
  styleUrls: ['./customer-details-staff.component.css']
})
export class CustomerDetailsStaffComponent implements OnInit {

  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  
  
  custListForStaff:any;
  constructor(public service:DataService, public router:Router) 
  { 
    //this.getCustDataForStaff();
  }




  

  delete(id){
    const res = confirm("Are you sure want to delete emp with ID : "+id);
    console.log("In cust component.ts");
    if(res==true){
      this.service.deleteCustomer(id).subscribe((res)=>{
        this.ngOnInit();
      })
    }
    
  }

  ngOnInit()
   {
    
    {
  
      this.service.getCustDataForStaff().subscribe((res)=>
      {
        console.log(res);
        this.custListForStaff=res;
      },(error)=>
      {
        console.log(error)
      })
    }
  }


}
