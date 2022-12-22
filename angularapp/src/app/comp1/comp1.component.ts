import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username;
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
