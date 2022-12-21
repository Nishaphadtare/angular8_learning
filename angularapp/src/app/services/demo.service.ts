import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
 products = [
  {name: 'Laptop', id: '101'},
  {name: 'Mobile', id: '102'},
  {name: 'TV', id: '103'},
 ]
  constructor() { }

  display(){
    alert('Subscribed Successfully')
  }
}
