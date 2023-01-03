import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DemocourseComponent } from './democourse/democourse.component';
import { NgswitchassignComponent } from './ngswitchassign/ngswitchassign.component';
import { AttriComponent } from './attri/attri.component';
import { DirectivesComponent } from './directives/directives.component';
import { CusdirassinDirective } from './cusdirassin.directive';
import { DemoComponent } from './demo/demo.component';
import { InputdecComponent } from './inputdec/inputdec.component';
import HooksComponent from './hooks/hooks.component';
import { AssigndirectivesComponent } from './assigndirectives/assigndirectives.component';
import { DocheckassigComponent } from './docheckassig/docheckassig.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { AccountformComponent } from './accountform/accountform.component';
import { FormComponent } from './form/form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AssignReactiveFormComponent } from './assign-reactive-form/assign-reactive-form.component';
import { AssignTemplateDrivenformComponent } from './assign-template-drivenform/assign-template-drivenform.component';
import { AsignReactiveformsComponent } from './asign-reactiveforms/asign-reactiveforms.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import {HttpClientModule} from '@angular/common/http';
import { ValidationReactivFormComponent } from './validation-reactiv-form/validation-reactiv-form.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
// import { PipesComponent } from './pipes/pipes.component';
import { AssignPipesComponent } from './assign-pipes/assign-pipes.component';
import { CountPipe } from './count.pipe';
import { AssignpipePipe } from './assignpipe.pipe';
// import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { FilterPipe } from './filter.pipe';
import { AssignFilterPipeComponent } from './assign-filter-pipe/assign-filter-pipe.component';
import { AssfilterpipePipe } from './assfilterpipe.pipe';
import { pipe } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { PageNotFooundComponent } from './page-not-foound/page-not-foound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './product/products.module';
import { OrdersModule } from './orders.module';
import { AdduserComponent } from './adduser/adduser.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { AssingrapidapiComponent } from './assingrapidapi/assingrapidapi.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    warningComponent,
    SuccessComponent,
    TwowayComponent,
    DemodirectivesComponent,
    NgswitchComponent,
    DemocourseComponent,
    NgswitchassignComponent,
    AttriComponent,
    DirectivesComponent,
    CusdirassinDirective,
    DemoComponent,
    InputdecComponent,
    HooksComponent,
    AssigndirectivesComponent,
    DocheckassigComponent,
    SimpleformComponent,
    AccountformComponent,
    FormComponent,
    ReactiveformComponent,
    AssignReactiveFormComponent,
    AssignTemplateDrivenformComponent,
    AsignReactiveformsComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    ValidationReactivFormComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    // PipesComponent,
    AssignPipesComponent,
    CountPipe,
    AssignpipePipe,
    // FilterPipesComponent,
    FilterPipe,
    AssignFilterPipeComponent,
    AssfilterpipePipe,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    PageNotFooundComponent,
    DemopostComponent,
    PostdetailsComponent,
    AdduserComponent,
    RapidapiComponent,
    AssingrapidapiComponent
    // ProductsComponent,  

  ],


  imports: [
    BrowserModule,
    ProductsModule ,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrdersModule

   

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor() {
    console.log('App module called');
    
  }
}
