import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgModel){
    console.log(form);
    
  }

}
