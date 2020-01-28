import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  admin:any=JSON.parse(sessionStorage.getItem("user"))
  staff:any;
  constructor(public service:DataService) 
  { 
    //this.getStaffData();
  }

  delete(id){
    const res = confirm("Are you sure want to delete emp with ID : "+id);
    console.log("In cust component.ts");
    if(res==true){
      this.service.deleteStaff(id).subscribe((res)=>{
        this.ngOnInit();
      })
    }
    
  }


  

  ngOnInit() 
  {
   
  {

    this.service.getStaffData().subscribe((res)=>
    {
      console.log(res);
      this.staff=res;
    },(error)=>
    {
      console.log(error)
    })
  }
  }

}
