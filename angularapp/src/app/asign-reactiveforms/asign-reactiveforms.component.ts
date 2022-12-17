import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-asign-reactiveforms',
  templateUrl: './asign-reactiveforms.component.html',
  styleUrls: ['./asign-reactiveforms.component.css']
})
export class AsignReactiveformsComponent implements OnInit {
  submitted : boolean = false;
  myReactiveForm : FormGroup;
  genders =[
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'}
  ]
  constructor() { 
    this.createForm();
  }

  Onsubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm);

    
  }
  ngOnInit() {
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
      'userDetails' : new FormGroup({
      'firstname' : new FormControl('', Validators.required),
      'lastname' : new FormControl('', Validators.required),
      'age' : new FormControl('', Validators.required),
      'phone' : new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required)
      }),
      'city': new FormControl('',Validators.required),
      'password': new FormControl('', Validators.required),
      'ConfirmPassword': new FormControl('', Validators.required),
      'gender': new FormControl('Female')
    })
  }
}
