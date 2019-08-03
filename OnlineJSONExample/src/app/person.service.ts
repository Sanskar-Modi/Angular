import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  http:HttpClient
  employees:Employee[] =[]

constructor(http:HttpClient) {
    this.http = http
   }
   fetched:boolean = false
   fetchEmployee()
   {
     this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(data=>
      {
        if(!this.fetched)
        {
          this.convertData(data)
          this.fetched = true;
        }
      })
   }
   getData():Employee[]
   {
    return this.employees;
   }
   convertData(data)
   {
    for(let o of data)
      {
        let e = new Employee(o.id,o.employee_name,o.employee_salary,o.employee_age);
        this.employees.push(e);
      }
   }
   }


export class Employee
{
  id:number
  name:string
  sal:any
  age:number
  
    constructor(id:number,name:string,sal:any,age:number) { 
      
      this.name = name
      this.sal = sal
      this.id = id
      this.age = age
    }

}
