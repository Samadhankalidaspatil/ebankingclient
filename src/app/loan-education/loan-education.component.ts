import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-education',
  templateUrl: './loan-education.component.html',
  styleUrls: ['./loan-education.component.css']
})
export class LoanEducationComponent implements OnInit {

  customer:any=JSON.parse(sessionStorage.getItem("user"))

  loan:any;
  msg:any;
  No=Number;
  
  constructor(public dataService:DataService,public router:Router) { }
 
  addEducationLoanData(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.loan=formdata.form.value;
   this.No = this.customer.id;
    console.log(this.loan);
    this.dataService.addEducationLoanData(this.loan, this.No).subscribe((res)=>{
      console.log(res);
      confirm("Applied for loan successfully ");
      this.router.navigate(['user-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
