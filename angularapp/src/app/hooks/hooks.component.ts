import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export default class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() userid: number;
  @Input() parentData : string;
  @Input() product: Product;
  @ContentChild("child", {static: false}) contentChild: ElementRef;
  @ViewChild("childhook", {static: false}) viewchild: ElementRef;
pi;

  constructor() { 
    this.pi = 3.14;
    console.log('HooksComponent constructor called');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
       this.viewchild.nativeElement.setAttribute('style', `color: ${this.parentData}`)

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called', this.viewchild);
   // this.viewchild.nativeElement.setAttribute('style', `color: ${this.parentData}`)

    
  }
  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called');
      this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)

      
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit call', this.contentChild);
    console.log('view int access', this.viewchild);
    
    // this.contentChild.nativeElement.setAttribute('style', 'color: green')
   
    // this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }
  ngDoCheck(): void {
   console.log('ngDoCheck called', this.contentChild);
   
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges called');
    
    // console.log(this.parentData);

    // for (const propname in changes) {
    //   const prop = changes[propname] 

    //     const {previousValue, currentValue, firstChange} = prop;

    //     console.log(`prop name ${propname}`);
    //     console.log(`prev value ${previousValue}`);
    //     console.log(`current value ${currentValue}`);
    //     console.log(`First change ${firstChange}`);
    //     console.log("--------------------------------------");
        
    //   }
    }
   
  ngOnInit()    {
      console.log('HooksComponent ngOnInit called');
    }

}




