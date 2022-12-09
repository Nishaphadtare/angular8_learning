import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  defaultValue: string = "Angular";
  employee = new Employee();
  submitted: boolean = false
  constructor() { }

  ngOnInit() {
  }

  Onsubmit(form: NgForm){
    this.submitted=true
    this.employee.course = form.value.course;
    this.employee.username = form.value.userDetails.username;
    this.employee.email = form.value.userDetails.email;

    // console.log(form.value.course);
    // console.log(form.value.userDetails.username);
    // console.log(form.value.userDetails.email);

    this.saveEmployeeData(this.employee)
    
  }
  saveEmployeeData(emp:Employee){
    console.log(emp.course);
    
  }

  }
