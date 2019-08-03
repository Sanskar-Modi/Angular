import { Component, OnInit,Input } from '@angular/core';
import {Employee} from './Employee';

@Component({
  selector: 'emp1',
  templateUrl: './employeeeventbinding.component.html',
  styleUrls: ['./employeeeventbinding.component.css']
})
export class EmployeeeventbindingComponent implements OnInit {

  constructor() { }
  @Input ("empObj") employeeObj1:Employee
isCollapsed = true;

  ngOnInit() {
   
  }
  check()
  {
    this.isCollapsed = !this.isCollapsed    
  }
 
}
