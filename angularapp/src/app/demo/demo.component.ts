import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {


  @Input() myinputMsg : string;
//   @Output() foodevent: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('from parent', this.myinputMsg);
    
  }
// addtofood(value){

//   this.foodevent.emit()
// }


}
