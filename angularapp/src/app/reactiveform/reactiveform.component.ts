import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  notAllowedNames = ["Codemind", "Technology"]

 genders = [
  {
    id: '1',
    value: 'Male'
  },
  {
    id : '2',
    value: 'Female'

  }
 ]

  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {

    
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);

  }
  
  createForm(){
    this.myReactiveForm = new FormGroup({
      'userDetails':ner FormGroup({
        'username' : new FormControl('', [Validators.required, this.NaNames.bind(this)]),
      'email' : new FormControl('', [Validators.required, Validators.email, this.NaEmails])
      }),
      
      'course' : new FormControl('Angular'),
      'gender' : new FormControl('')
    })
  }
  Onsubmit(){
    console.log(this.myReactiveForm);
    var selectedvalue = "";
    
  }
  NaNames(control: FormControl)
  {
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return {'namesNotAllowed': true}
    }
    return null;
  }
  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

  

}
