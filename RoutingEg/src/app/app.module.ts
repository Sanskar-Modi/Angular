import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {EmpserviceService} from './empservice.service'
import{HttpClient,HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    FormsModule
  ],
  providers: [EmpserviceService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
