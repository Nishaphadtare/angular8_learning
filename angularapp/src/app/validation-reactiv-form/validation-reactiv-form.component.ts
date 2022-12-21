import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-reactiv-form',
  templateUrl: './validation-reactiv-form.component.html',
  styleUrls: ['./validation-reactiv-form.component.css']
})
export class ValidationReactivFormComponent implements OnInit {

  myReactiveForm = FormGroup;
  constructor() { }

  ngOnInit() {
  }
  // OnSubmit(form: NgForm){
  //   console.log(this.myReactiveForm);
    
  // }

}
