import { Component } from '@angular/core';
import { Employee } from './employee/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'DateApp';

  e:Employee = new Employee()
  e1:Employee = new Employee()
  empArr:Employee[];
  

  constructor()
  {
  
    this.e.name = "Sanskar"
    this.e.sal = 20000
    this.e.id = [101];
    this.e.gender = "male";
    this.e1 = new Employee();
    this.e1.id = [102]
    this.e1.name ="Sneha"
    this.e1.sal = 20000
    this.e1.gender ="female"

    this.empArr = [this.e,this.e1];
  }
}
