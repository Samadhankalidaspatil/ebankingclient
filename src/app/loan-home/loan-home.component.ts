import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-home',
  templateUrl: './loan-home.component.html',
  styleUrls: ['./loan-home.component.css']
})
export class LoanHomeComponent implements OnInit {
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  loan:any;
  //applied_date=Date.now;
  msg:any;
  No:Number;
  constructor(public dataService:DataService,public router:Router) { }
 
  addLoanData(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.loan=formdata.form.value;
   // this.loan.Date=this.loan.applied_date;
    this.No = this.customer.id;
    console.log(this.loan);
    this.dataService.addHomeLoanData(this.loan, this.No).subscribe((res)=>{
      console.log(res);
      confirm("Applied for loan successfully ");
      this.router.navigate(['user-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
