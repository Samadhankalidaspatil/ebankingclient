import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate
{
  dbuser:any={};
  baseUrl="http://localhost:8080/E_banking__system/user/login"
  
  loginsuc=false;
  
  constructor(private router:Router, public http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  }

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       (window.sessionStorage.getItem("isActive")=="1" || window.sessionStorage.getItem("isActive")=="2" || window.sessionStorage.getItem("isActive")=="3"))
    {
      console.log("user logged successfully");
      return true;
    }
    else
    {
      this.loginsuc = true;
      return false;

    }
  }

  CheckCredentialsWithDB(loginCredentials)
  {
    console.log(loginCredentials);

    let obsRes = this.http.post(this.baseUrl,loginCredentials);
    obsRes.subscribe((result)=>{
      this.dbuser = result;
      
      console.log(this.dbuser);
     
      console.log(this.dbuser.email + " " + this.dbuser.password);

      if(this.dbuser.roletype == "ADMIN")
      {
        window.sessionStorage.setItem("isActive", "1");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser))
       
        this.router.navigate(['admin-home']);
        return true;
      }
      else if(this.dbuser.roletype == "STAFF")
      {
        window.sessionStorage.setItem("isActive", "2");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser))
        this.router.navigate(['staff-home']);
        return true;
      }
      else if(this.dbuser.roletype == "CUSTOMER")
      {
        window.sessionStorage.setItem("isActive", "3");
        sessionStorage.setItem("user", JSON.stringify(this.dbuser))
        this.router.navigate(['user-home']);
        return true;
      }
      else
      {
       // window.sessionStorage.setItem("isActive", "0");
       // this.router.navigate(['login']);
        return false;
      }
      return false;
    })
  }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/login']);
  }

}