import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _authService: AuthService) { }

  // login = new Login();
  // loginSubmitted: boolean = false;
  // constructor() { }

  ngOnInit() {
  }
  OnLogin(){
    // this.loginSubmitted = true;
    // this.login.email = form.value.email;
    // this.login.password = form.value.password;  
  }
   checkuser(uname, password)
   {

    var output = this._authService.checkUserNameandPassword(uname, password);

    if (output == true) {
        window.alert('Login Successfully');
        this._route.navigate(['product']);
      }else {
        window.alert('Invalid username and password');
      }
    
     
    // if (uname == 'admin' && password == 'admin')
    // {
    //   this._route.navigate(['product/laptop']);
    // }
   }

}
