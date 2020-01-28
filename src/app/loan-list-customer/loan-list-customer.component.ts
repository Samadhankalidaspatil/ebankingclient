import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-list-customer',
  templateUrl: './loan-list-customer.component.html',
  styleUrls: ['./loan-list-customer.component.css']
})
export class LoanListCustomerComponent implements OnInit {

  customer:any=JSON.parse(sessionStorage.getItem("user"))
  
  custAccountData:any;
  lid:"";
  loanType:"";
  amount:"";
  loan_period:"";
  interest_rate:"";
  applied_date:"";
  status:"";

  constructor(public service:DataService,  public router:Router) 
  { 
    this.getCustAccounts(this.customer.id);
  }


  getCustAccounts(id)
  {
    console.log(id);
    this.service.getCustLoanAccountData(id).subscribe((res)=>{
      console.log("Acc details are here");
      console.log(res);
      this.custAccountData=res;
      this.lid=this.custAccountData.lid;
      this.loanType=this.custAccountData.loanType;
      this.amount=this.custAccountData.amount;
      this.loan_period=this.custAccountData.loan_period;
      this.interest_rate=this.custAccountData.interest_rate;
      this.applied_date=this.custAccountData.applied_date;
      this.status=this.custAccountData.status;
    })
  }

  ngOnInit()
  {
   
   
 }

}
