import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'emp',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})

export class MycomponentComponent  {
e :EMP2;
  constructor()
  {
    this.e = new EMP2();
    this.e.setData1("Sanskar",101,20000);
  }
  ngOnInit() {

  }
}

class EMP2 {
  name: string;
  id: number;
  sal: number;
  
  public setData1(name: string, id: number, sal: number): void {
    this.id = id;
    this.sal = sal;
    this.name = name;
  }
}

