import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  defaultGender: string = 'Female'
  defaultValue: string = "Angular"
  defaultCountry: string = "India"
  employee = new Employee();
  submitted: boolean = false;
  genders = [
    {id:'1,', value:'male'},
    {id:'2,', value:'Female'}
  ]

  ngOnInit() {
  }

  Onsubmit(form: NgForm){
    this.submitted=true
    this.employee.course = form.value.course;
    this.employee.username = form.value.userDetails.username; // we can use userDetails because this is form-group
    this.employee.email = form.value.userDetails.email; // form-group
    this.employee.gender = form.value.gender;
    this.employee.country = form.value.country;
    this.employee.date = form.value.date;
    this.employee.contact = form.value.contact;
    // console.log(form.value.course);
    // console.log(form.value.userDetails.username);
    // console.log(form.value.userDetails.email);
    form.reset();
    form.controls['course'].setValue('Angular'),
    form.controls['gender'].setValue('Female'),
    console.log(form.controls);
    
    
    
    // this.saveEmployeeData(this.employee)
    
  }
  saveEmployeeData(emp:Employee){
    console.log(emp.course);
    
  }

  }
