import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TVComponent } from './tv/tv.component';
import { TabletComponent } from './tablet/tablet.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes = [
  {path:'product', component: ProductComponent, children:[ //localhost:4200/
    {path: 'laptop', component: LaptopComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'tv', component: TVComponent},
    {path: 'washingmachine', component: WashingmachineComponent},
  ]},//lcalhosr://4200/ProductComponent

] 

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TVComponent,
    TabletComponent,
    WashingmachineComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsModule {
  constructor() {
    console.log('product module called');
    
  }
 }
