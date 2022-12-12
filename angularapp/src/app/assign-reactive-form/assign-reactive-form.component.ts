import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-assign-reactive-form',
  templateUrl: './assign-reactive-form.component.html',
  styleUrls: ['./assign-reactive-form.component.css']
})
export class AssignReactiveFormComponent implements OnInit {


  email:string
  subscription:string;
  password:any;
  submit: boolean = false;

  defaultValue:string ='Advance'
  
  // myReactForm : FormGroup;
  constructor() { 
    // this.createForm();
  }
  // createForm() {

  //   this.myReactForm = new FormGroup({
  //     'email' : new FormControl(),
  //   })
  // }

  ngOnInit() {
  }

  Onsubmit(form:NgForm){
    this.submit=true
   
  }
}
