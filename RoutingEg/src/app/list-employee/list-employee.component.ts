import { Component, OnInit } from '@angular/core';
import { EmpserviceService, Employee } from '../empservice.service';

@Component({
  selector: 'listemp',
 templateUrl: './list-employee.component.html',
 styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  
service:EmpserviceService
employees:Employee[] = []
constructor(service:EmpserviceService)
{
  this.service = service
}
delete(id:number)
{
  this.service.delete(id);
  this.employees = this.service.getEmployees()
}

  ngOnInit() {
    
    this.service.fetchEmployee();
    this.employees = this.service.getEmployees()
    
  }

}
