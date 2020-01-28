import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email:any;
  password:any;
  

  constructor(private service: AuthService, private router: Router) 
  {

  }

  ngOnInit() 
  {
  }

  SignIn(loginForm)
  {
    let loginCredentials = loginForm.form.value;
    
    console.log(loginCredentials);
    
     this.service.CheckCredentialsWithDB(loginCredentials);

  }

  Register()
  {
    this.router.navigate(['/register']);
  }
}








