import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AssignPipesComponent } from './assign-pipes/assign-pipes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { ProductComponent } from './product/product.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpleformComponent } from './simpleform/simpleform.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},//lcalhosr://4200/ProductComponent
  {path:'contactus', component:ContactUsComponent},
  {path:'simpleform', component:SimpleformComponent},
  {path:'reactiveform', component:ReactiveformComponent},
  {path: 'assignfilterPipr', component: AssignPipesComponent},
  {path: '**', component:PageNotFooundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
