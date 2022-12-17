import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';


@Component({
  selector: 'app-assign-template-drivenform',
  templateUrl: './assign-template-drivenform.component.html',
  styleUrls: ['./assign-template-drivenform.component.css']
})
export class AssignTemplateDrivenformComponent implements OnInit {
  
stubmitted : boolean =false;
defaultGender : string = 'Female';
firstname: string;
// employee = new Employee();
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
    console.log(form.value.firstname);
    console.log(form.value.lastname);
    console.log(form.value.email);
    console.log(form.value.phone);
    
    
    
    
  
    // this.username.value;
    // form.reset();
      // form.controls['gender'].setValue['Feamil']
      // console.log(form.controls);
      
    }
  }


