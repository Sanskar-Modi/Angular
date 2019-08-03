import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeeventbindingComponent } from './employeeeventbinding/employeeeventbinding.component';
import { Emp2wayComponent } from './emp2way/emp2way.component';
import { MypipePipe } from './mypipe.pipe';
import { MydirectiveDirective } from './mydirective.directive';
import { Mydirective1Directive } from './mydirective1.directive';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    EmployeeComponent,
    EmployeeeventbindingComponent,
    Emp2wayComponent,
    MypipePipe,
    MydirectiveDirective,
    Mydirective1Directive
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
