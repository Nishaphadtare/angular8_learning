import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { warningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';
import { TwowayComponent } from './twoway/twoway.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DemocourseComponent } from './democourse/democourse.component';
import { NgswitchassignComponent } from './ngswitchassign/ngswitchassign.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DirectivesComponent } from './directives/directives.component';
import { CusdirassinDirective } from './cusdirassin.directive';

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
    CustdirDirective,
    DirectivesComponent,
    CusdirassinDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
