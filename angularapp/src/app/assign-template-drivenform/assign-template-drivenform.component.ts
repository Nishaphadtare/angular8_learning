import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-assign-template-drivenform',
  templateUrl: './assign-template-drivenform.component.html',
  styleUrls: ['./assign-template-drivenform.component.css']
})
export class AssignTemplateDrivenformComponent implements OnInit {
  
stubmitted : boolean =false;
defaultGender : string = 'Female';
// employee = new Employees();
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
    this.stubmitted = true
   
    
    
    // console.log(form.valueChanges);
    
    
  
    // this.username.value;
    // form.reset();
      // form.controls['gender'].setValue['Feamil']
      // console.log(form.controls);
      
    }
  }


