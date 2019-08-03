import { Component, OnInit } from '@angular/core';
import { FetchService, Department } from '../fetch.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
service:FetchService
department:Department[] = []
  constructor(service:FetchService) { 
    this.service = service
  }
delete(id:number)
{
  this.service.delete(id)
  this.service.getData()
}
  ngOnInit() {
    this.service.fetchEmployee()
    this.department = this.service.getData()
  }

}
