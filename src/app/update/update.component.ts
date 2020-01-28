import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  staffOwn:any=JSON.parse(sessionStorage.getItem("user"))
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
       this.service.update(this.emp);

    observableResultOfUpdate.subscribe((resultOfUpdate)=>{

      console.log(resultOfUpdate);
      this.emp=resultOfUpdate;
      console.log(this.emp);
      this.router.navigate(['customer-details-staff']);
    });
  }

  ngOnInit()
   {
    this.route.paramMap.subscribe((result)=>{
     this.No= result.get("id");
      console.log(this.No);
 
      // let observableResult = 
              this.service.SelectById(this.No).subscribe((res:any)=>{
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
