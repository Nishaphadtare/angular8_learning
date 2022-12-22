import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-pipes',
  templateUrl: './assign-pipes.component.html',
  styleUrls: ['./assign-pipes.component.css']
})
export class AssignPipesComponent implements OnInit {

todaysDate = new Date();
price : number = 500000;
price1 : number = 1000000;
 name : string = 'Nisha';
 obj = {id: 1, name: 'Nisha'}
 

  constructor() { }

  ngOnInit() {
  }

}
