import { Component, OnInit } from '@angular/core';
import { EmpserviceService, Employee } from '../empservice.service';

@Component({
  selector: 'createemp',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  createdEmployee: Employee
  service: EmpserviceService
  constructor(service: EmpserviceService) {
    this.service = service
  }

  ngOnInit() {
  }
  add(data: any) {
    this.createdEmployee = new Employee(data.eid, data.ename, data.esal, data.egender)
    this.service.add(this.createdEmployee)
  }
}
