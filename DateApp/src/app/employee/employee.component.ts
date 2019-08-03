import { Component, OnInit, Input } from '@angular/core';
import {Employee} from './Employee';
@Component({
  selector: 'emp',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

//    id:number
//  name:string
//  sal:number 
@Input ("empObj") employeeObj:Employee
e:Employee = new Employee();
e1:Employee = new Employee()

  constructor() { 
  
  }

  ngOnInit() {
  }

}
 
