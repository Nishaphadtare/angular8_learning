import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { format } from 'util';
import { FirebasePost } from '../models/firebasepost';
import { FirebaseService } from '../services/firebase.service';
import {map}


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted : boolean = false;
  removeItem :boolean = false;
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
 firebasePost: FirebasePost;
  constructor(private _fb: FormBuilder, private _firbaseService: FirebaseService) { 
    this.createForm();
  }

  removeFormControl(index: number): void
  {
   (<FormArray>this.myReactiveForm.get('skills')).removeAt(index)
    
  }
  ngOnInit() {

    const data = from(this._firbaseService.users);

    // data.pipe(
    //   map(x => x.name)
    // )

    // this._firbaseService.getPostsDataFirbase().pipe{
    //   map(responceData) => {
    //     const postArray = [];

    //     for(const key in responseData){
    //       if(resllponce.)
    //     }
    //   };ha
    // }
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

    this._firbaseService.getPostsDataFirbase().subscribe(res => {
      console.log('getPostsDataFirebase', res);
      
    })

    // this.myReactiveForm = new FormGroup({
    //   'userDetails':new FormGroup({
    //   'username' : new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //   'email' : new FormControl('', [Validators.required, Validators.email, this.NaEmails])
    //   }),
    //   'course' : new FormControl(''),
    //   'gender' : new FormControl(''),
    //   'skills' : new FormArray([
    //     new FormControl(null, Validators.required),
    //     // new FormControl(null)
    //   ])
    // })

    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['',Validators.required],
        email: ['',Validators.required]
      }),
      course: ['Angular'],
      gender: ['Female'],
      skills:this._fb.array([])
    })
  }
  Onsubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);
    console.log(this.myReactiveForm);
    
    this.firebasePost = new FirebasePost();
    this.firebasePost.ussername = this.myReactiveForm['controls'].userDetails['controls'].username.value;
    this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
    this.firebasePost.course = this.myReactiveForm['controls'].course.value;
    this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
    this.firebasePost.skills = this.myReactiveForm['controls'].skills.value;

    console.log('firebase post', this.firebasePost);
    this._firbaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res => {
      console.log('post from reactive form', res);
      
    })
    
    // this._firbaseService.createPostDataReactiveForm()

    // var selectedvalue = "";
  }
  // remove(){
  //   this.removeItem = true;
  //   console.log(this.myReactiveForm);
    
  // }

  OnAddSkills(){
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
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
