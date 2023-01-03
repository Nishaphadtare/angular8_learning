import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

constructor(private _demoService: DemoService, private _postService: PostService){

}
  ngOnInit(): void {
    this._demoService.getUserData().subscribe(data => {
      console.log('getting data form api', data);
      
    })
    this._demoService.getDataPosts().subscribe(results => {
      console.log('posts', results);
      
    })
  }

data: string = 'red';
name:string;
price: number;
product: Product = new Product();
  public uid: number;
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

  appchildExilt: boolean = true;
  
  Destroy(){
    this.appchildExilt = false;
  }
  

  handleData(value) {
    this.data= value.target.value
  }
  updateProduct() {
    // this.product = new Product; 
    this.product.name = this.name;
    this.product.pricce = this.price;
  }
  DeletePost(){
    this._postService.deletePostById(1).subscribe(res => {
      console.log(res);
    })
  }
}
