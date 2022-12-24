import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-filter-pipe',
  templateUrl: './assign-filter-pipe.component.html',
  styleUrls: ['./assign-filter-pipe.component.css']
})
export class AssignFilterPipeComponent implements OnInit {

  emp : string = '';
  empArr : any[]= [
    {
      id: 1,
      name: 'Vicky',
      gender: 'Male',
      dob : '24/6/1993',
      company: 'TCS',
      salary: '50000'
    },
    {
      id: 2,
      name: 'Priya',
      gender: 'Female',
      dob : '14/3/1997',
      company: 'Wipro',
      salary: '40000'
    },
    {
      id: 3,
      name: 'Sneha',
      gender: 'Female',
      dob : '21/11/1995',
      company: 'IT',
      salary: '70000'
    },
    {
      id: 4,
      name: 'Nisha',
      gender: 'Female',
      dob : '18/8/1995',
      company: 'Capgemini',
      salary: '80000'
    },
    {
      id: 5,
      name: 'Nikhil',
      gender: 'Male',
      dob : '24/1/1992',
      company: 'Infosys',
      salary: '60000'
    },
    {
      id: 6,
      name: 'Sonali',
      gender: 'Female',
      dob : '15/7/1991',
      company: 'Hr',
      salary: '90000'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
