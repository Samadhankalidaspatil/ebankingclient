import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  
  custAccountData:any;
  account_no:"";
  acc_holder_name:"";
  bank_add:"";
  ifsc:"";
  account_bal:"";
  acctype:"";
  opening_date:"";

  constructor(public service:DataService,  public router:Router) 
  { 
    this.getCustAccounts(this.customer.id);
  }


  getCustAccounts(id)
  {
    console.log(id);
    this.service.getCustAccountData(id).subscribe((res)=>{
      console.log("Acc details are here");
      console.log(res);
      this.custAccountData=res;
      this.account_no=this.custAccountData.account_no;
      this.acc_holder_name=this.custAccountData.acc_holder_name;
      this.bank_add=this.custAccountData.bank_add;
      this.ifsc=this.custAccountData.ifsc;
      this.account_bal=this.custAccountData.account_bal;
      this.acctype=this.custAccountData.acctype;
      this.opening_date=this.custAccountData.opening_date;
    })
  }

  ngOnInit()
  {
   
   
 }

}
