import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';
import { User } from '../models/templateDrivenform';


@Component({
  selector: 'app-assign-template-drivenform',
  templateUrl: './assign-template-drivenform.component.html',
  styleUrls: ['./assign-template-drivenform.component.css']
})
export class AssignTemplateDrivenformComponent implements OnInit {
  
stubmitted : boolean = false;
defaultGender : string = 'Female';
user = new User();
genders = [
  {
    id :'1', 
    value: 'Male'
  },
  {
    id: '2',
    value: 'Female'
  }
]
  constructor() { }


  ngOnInit() {
  }
  OnSubmit(form: NgForm){
    this.stubmitted = true;
    this.user.firstname = form.value.firstname;
    this.user.lastname = form.value.lastname;
    this.user.age = form.value.age;
    this.user.city = form.value.city;
    this.user.password = form.value.password;
    this.user.confirmpassword = form.value.confirmpassword;
    this.user.phone = form.value.phone;
    form.reset();
    form.controls['gender'].setValue('Female');
    console.log(form.controls);
    

  
    }
  }


