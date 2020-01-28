import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  admin:any=JSON.parse(sessionStorage.getItem("user"))
  
  loanDetailsAdmin:any;
  constructor(public service:DataService) 
  { 
    //this.getLoanData();
  }

  approve(lid){
    const res = confirm("Are you sure want to Change Status : "+lid);
    if(res==true){
      this.service.approveLoanAdmin(lid).subscribe((res)=>{
        console.log(res);
       this.ngOnInit();
      })
    }
    
  }

  reject(lid){
    const res = confirm("Are you sure want to Change Status : "+lid);
    if(res==true){
      this.service.rejectLoanAdmin(lid).subscribe((res)=>{
        console.log(res);
       this.ngOnInit();
      })
    }
    
  }

  

  ngOnInit()
   {
    
    {
      this.service.getLoanData().subscribe((res)=>
      {
        console.log(res);
        this.loanDetailsAdmin=res;
      },(error)=>
      {
        console.log(error)
      })
    }
  }

}
