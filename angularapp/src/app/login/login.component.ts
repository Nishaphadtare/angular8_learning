import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  loginSubmitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  OnLogin(form: NgForm){
    this.loginSubmitted = true;
    this.login.email = form.value.email;
    this.login.password = form.value.password;  
  }

}
