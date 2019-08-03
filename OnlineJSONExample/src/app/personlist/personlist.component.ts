import { Component, OnInit } from '@angular/core';
import { PersonService, Employee } from '../person.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
  
  service:PersonService 
  employee:Employee[] = [] 
  constructor(service:PersonService) { 
    this.service = service
  }

  ngOnInit() {
    this.service.fetchEmployee()
    this.employee = this.service.getData()
  }

}
