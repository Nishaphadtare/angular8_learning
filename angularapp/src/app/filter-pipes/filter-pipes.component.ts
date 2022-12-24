import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {

  namesearch: string = '';
  productArr: any[] = [
    {
      sno: 1,
      name: 'Mobile',
      price: '7000 rs',
      availability: 'Not Available'
    },
    {
      sno: 2,
      name: 'TV',
      price: '17000 rs',
      availability: 'Available'
    },
    {
      sno: 3,
      name: 'Washing Machine',
      price: '170000 rs',
      availability: 'Not Available'
    },
    {
      sno: 4,
      name: 'Tap',
      price: '35000 rs',
      availability: 'Available'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
