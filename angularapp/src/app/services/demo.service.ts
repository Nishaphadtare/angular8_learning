import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  apiURL: 'https://jsonplaceholder.typicode.com/users';
 products = [
  {name: 'Laptop', id: '101'},
  {name: 'Mobile', id: '102'},
  {name: 'TV', id: '103'},
 ]
  constructor(private http: HttpClient) { }

  display(){
    alert('Subscribed Successfully');
  }

  getUserData(){
    return this.http.get(this.apiURL);
  }
}
