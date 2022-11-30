import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular learning';
  uname = 'I am from app component';

  

  // EmployeeRecords: any =[
  //   {
  //     eName: 'Nisha', eCity: 'Mumbai', eSalary: '200000'
  //   },
  //   {
  //     eName: 'Sneha', eCity: 'pune', eSalary: '150000'
  //   }
  // ]

  EmployeeInfo : any = [
    {
      emp_id: " 1", emp_name: "Sneha",  emp_company: 'Infosys',  emp_salary: '200000'
    },
    
  
  ]
}
