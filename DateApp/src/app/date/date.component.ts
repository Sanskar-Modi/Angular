import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  myDate: string

  constructor() {

    setInterval(() => {
      let myDate1 = new Date();
      this.myDate = myDate1.toDateString() + " " + myDate1.toLocaleTimeString()
    }, 1000)

  }

  ngOnInit() {
  }

}
