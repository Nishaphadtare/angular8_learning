import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import { AssignPipesComponent } from './assign-pipes/assign-pipes.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {path:'login',component:LoginComponent},

  {path:'home', component:HomeComponent},

  {path:'contactus', component:ContactUsComponent},

  {path:'simpleform', component:SimpleformComponent},

  {path:'reactiveform', component:ReactiveformComponent},

  {path: 'assignfilterPipr', component: AssignPipesComponent},

  {path: 'post', component: DemopostComponent},

  {path: 'postdetails/:id', component: PostdetailsComponent},

  {path: 'adduser', component: AdduserComponent, canDeactivate:[UnSavedChangesGuard]},

  {path: 'product', canActivate:[AuthGuard],  loadChildren: './product/products.module#ProductsModule'},

  {path: '**', component:PageNotFooundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
