import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name : string = 'Nisha';
  price : number = 800000;
  // obser;
  todaysDate = new Date();
  obj = {id: 101, name: 'test'}
  // constructor(private _utilityService: UtilityService){}
  ngOnInit() {
  }

}
