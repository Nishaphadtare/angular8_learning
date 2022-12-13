import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign-reactive-form',
  templateUrl: './assign-reactive-form.component.html',
  styleUrls: ['./assign-reactive-form.component.css']
})
export class AssignReactiveFormComponent implements OnInit {
  notAllowedNames = ['Codemind', 'Sevenmind', 'Technology']

  genders = [
    {
      id : '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    },
    {
      id: '3',
      value: 'Other'
    }
  ]
  myReactiveForm : FormGroup;
  constructor() { 
    this.createForm();
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'username' : new FormControl('', [Validators.required, this.NoNames.bind(this)]),
      'email' : new FormControl('',[Validators.required, Validators.email]),
      'course' : new FormControl('Javascript'),
      'gender': new FormControl('')
    })
  }

  Onsubmit(){
   console.log(this.myReactiveForm);
   
  }
  ngOnInit() {
  }
NoNames(control: FormControl)
{
  if(this.notAllowedNames.indexOf(control.value) !== -1){
    return {'namesNotAllowed': true}
  }
  return null;
}

 
}
