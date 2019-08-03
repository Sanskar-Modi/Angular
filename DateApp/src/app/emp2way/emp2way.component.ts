import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'emp2',
  templateUrl: './emp2way.component.html',
  styleUrls: ['./emp2way.component.css']
})

export class Emp2wayComponent implements OnInit {

  employee: any;

  constructor() {

    this.employee =
      {
        FirstName: "Sanskar", LastName: "Modi", Gender: "Male"
      }
  }

  ngOnInit() {
  }

}
