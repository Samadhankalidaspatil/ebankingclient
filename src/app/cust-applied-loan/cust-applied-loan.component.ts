import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-applied-loan',
  templateUrl: './cust-applied-loan.component.html',
  styleUrls: ['./cust-applied-loan.component.css']
})
export class CustAppliedLoanComponent implements OnInit {
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  
  custLoanData:any;
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
    this.service.getCustAccounts(id).subscribe((res)=>{
      console.log("Acc details are here");
      console.log(res);

      this.custLoanData=res;
      
      this.lid=this.custLoanData.lid;
      this.loanType=this.custLoanData.loanType;
      this.amount=this.custLoanData.amount;
      this.loan_period=this.custLoanData.loan_period;
      this.interest_rate=this.custLoanData.interest_rate;
      this.applied_date=this.custLoanData.applied_date;
      this.status=this.custLoanData.status;
    })
  }

  ngOnInit() {
  }

}
