import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  admin:any=JSON.parse(sessionStorage.getItem("user"))
  staff:any;
  msg:any;
  //Staffimage:any;
  constructor(public dataService:DataService,public router:Router) { }
//   onSelectFile(event) {
//     this.Staffimage = event.target.files[0];
// }
addStaff(formdata){
    console.log(formdata.form.value);
    this.staff=formdata.form.value;
    
    console.log(this.staff);
    this.dataService.AddStaffData(this.staff).subscribe((res)=>{
      console.log(res);
      confirm("Record added succesfully");
      this.router.navigate(['admin-home']);
    })
    //alert("In Add");
  }

  ngOnInit() {
  }
  

}
