import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-personal',
  templateUrl: './loan-personal.component.html',
  styleUrls: ['./loan-personal.component.css']
})
export class LoanPersonalComponent implements OnInit {
  customer:any=JSON.parse(sessionStorage.getItem("user"))
  loan:any;
  msg:any;
  No:Number;


  constructor(public dataService:DataService,public router:Router) { }
 
  addPersonalLoanData(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.loan=formdata.form.value;
    this.No = this.customer.id;
    console.log(this.loan);
    this.dataService.addPersonalLoanData(this.loan, this.No).subscribe((res)=>{
      console.log(res);
      confirm("Applied for loan successfully ");
      this.router.navigate(['user-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
