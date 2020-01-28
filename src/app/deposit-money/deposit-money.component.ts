import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {
  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  amount:any;
  msg:any;
  constructor(public dataService:DataService,public router:Router) { }

  deposit(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.amount=formdata.form.value;
    
    console.log(this.amount);
    this.dataService.deposit(this.amount).subscribe((res)=>{
      console.log(res);
      confirm("Amount Deposited successfully ");
      this.router.navigate(['staff-home']);
    })
    //alert("In Add");
  }


  ngOnInit() {
  }

}
