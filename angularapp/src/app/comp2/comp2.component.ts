import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateUserName(uname){
    console.log(uname.value);
    let emp = {
      name : 'Nisha',
      id : '101'
    }
    // next method is used to send message to an observable i.e username
    // this._utililtlylService.username.next(JSON.stringify(emp));
    }
}
