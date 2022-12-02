import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export default class HooksComponent implements OnInit, OnChanges, DoCheck{
  @Input() userid: number;
  @Input() parentData : string;
  @Input() product: Product;
pi;

  constructor() { 
    this.pi = 3.14;
    console.log('HooksComponent construct called');
    
  }
  ngDoCheck(): void {
   console.log('ngDoCheck called');
   
  }

  ngOnChanges(changes: SimpleChanges): void{
    // console.log(this.parentData);

    for (const propname in changes) {
      const prop = changes[propname] 

        const {previousValue, currentValue, firstChange} = prop;

        console.log(`prop name ${propname}`);
        console.log(`prev value ${previousValue}`);
        console.log(`current value ${currentValue}`);
        console.log(`First change ${firstChange}`);
        console.log("--------------------------------------");
        
      }
    }
   
  ngOnInit()    {
      console.log('HooksComponent ngOnInit called');
    }

}




