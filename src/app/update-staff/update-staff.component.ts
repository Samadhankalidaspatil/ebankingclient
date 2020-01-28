import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  admin:any=JSON.parse(sessionStorage.getItem("user"))
  emp:any;
  id:"";
  firstName:"";
  lastName:"";
  mobileNo:"";
  email:"";
No:any;    
  
 

  custListForStaff:any;
  constructor(public service:DataService, public router:Router,  public route:ActivatedRoute) 
  { 
   
  }


  OnUpdateCallMe(entireFormContent)
  {
    
    console.log(this.emp);
  //  this.emp=entireFormContent.form.content;
  //   console.log(this.emp);
    
    let observableResultOfUpdate = 
       this.service.updateStaff(this.emp);

    observableResultOfUpdate.subscribe((resultOfUpdate)=>{

      console.log(resultOfUpdate);
      this.emp=resultOfUpdate;
      console.log(this.emp);
      this.router.navigate(['staff-details']);
    });
  }

  ngOnInit()
   {
    this.route.paramMap.subscribe((result)=>{
     this.No= result.get("id");
      console.log(this.No);
 
      // let observableResult = 
              this.service.SelectStaffById(this.No).subscribe((res:any)=>{
                console.log(res);
                this.emp=res;
                console.log(this.emp);
              })
      console.log("In update component");
      //  observableResult.subscribe((recordsFound)=>{
      //    console.log(recordsFound[0]);
      //    this.emp =  recordsFound[0];
      // });
       
    }); 
  }

}



