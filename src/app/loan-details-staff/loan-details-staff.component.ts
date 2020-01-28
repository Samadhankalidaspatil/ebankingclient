import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-details-staff',
  templateUrl: './loan-details-staff.component.html',
  styleUrls: ['./loan-details-staff.component.css']
})
export class LoanDetailsStaffComponent implements OnInit {

  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  loanDetailsForStaff:any;
  constructor(public service:DataService, public router:Router) 
  { 
    //this.getLoanDataForStaff();
  }
 

  staffLoanStatus(lid){
    const res = confirm("Are you sure want to Change Status : "+lid);
    if(res==true){
      this.service.staffLoanStatus(lid).subscribe((res)=>{
        console.log(res);
       this.ngOnInit();
      })
    }
    
  }

  reject(lid){
    const res = confirm("Are you sure want to Change Status : "+lid);
    if(res==true){
      this.service.reject(lid).subscribe((res)=>{
        console.log(res);
       this.ngOnInit();
      })
    }
    
  }

  ngOnInit() 
  {
   
    {
  
      this.service.getLoanDataForStaff().subscribe((res)=>
      {
        console.log(res);
        this.loanDetailsForStaff=res;
      },(error)=>
      {
        console.log(error)
      })
    }
  }


}
