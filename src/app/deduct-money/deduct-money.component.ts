import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deduct-money',
  templateUrl: './deduct-money.component.html',
  styleUrls: ['./deduct-money.component.css']
})
export class DeductMoneyComponent implements OnInit {
  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  amount:any;
  msg:any;
  constructor(public dataService:DataService, public router:Router) { }

  deduct(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.amount=formdata.form.value;
    
    console.log(this.amount);
    this.dataService.deduct(this.amount).subscribe((res)=>{
      console.log(res);
      confirm("Amount Withdrawn successfully ");
      this.router.navigate(['staff-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
