import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
  emp:any;
  msg:any;
  //image:any;
  //address:any;

  constructor(public dataService:DataService,public router:Router) { }
//   onSelectFile(event) 
//   {
//     this.image = event.target.files[0];
// }

add(formdata)
  {
    console.log(formdata.form.value);
    this.emp=formdata.form.value;
    
    console.log(this.emp);
    this.dataService.AddData(this.emp).subscribe((res)=>{
      console.log(res);
      confirm("Account Created ");
      this.router.navigate(['staff-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }

}
