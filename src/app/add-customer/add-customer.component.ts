import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  
  acc:any;
  msg:any;
  uid: any;
 

  constructor(public dataService:DataService,public router:Router)
  { 
    
  }


  addAccount(formdata)
  {
    console.log(formdata.form.value);
    this.acc=formdata.form.value;

    console.log(this.acc);
    this.dataService.addAccount(this.uid, this.acc).subscribe((res)=>{
      console.log(res);
      confirm("Account Created ");
      this.router.navigate(['staff-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }
  

}
