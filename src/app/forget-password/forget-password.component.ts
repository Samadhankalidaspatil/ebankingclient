import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  password:any;
  msg:any;
  constructor(public dataService:DataService,public router:Router) { }

  change(formdata){
    console.log(formdata.form.value);
    console.log("in component.ts");
    this.password=formdata.form.value;
    
    console.log(this.password);
    this.dataService.changePassword(this.password).subscribe((res)=>{
      console.log(res);
      confirm("Password changed successfully ");
      this.router.navigate(['login']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
