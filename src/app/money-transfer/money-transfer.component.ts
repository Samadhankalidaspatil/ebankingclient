import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit {

  customer:any=JSON.parse(sessionStorage.getItem("user"))
  transfer:any;
  msg:any;
  
  constructor(public dataService:DataService,public router:Router) { }
 
  addTransfer(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.transfer=formdata.form.value;
    
    console.log(this.transfer);
    this.dataService.AddTransactionData(this.transfer).subscribe((res)=>{
      console.log(res);
      confirm("Money transfered successfully ");
      this.router.navigate(['user-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
