import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  http:HttpClient
  employees:Employee[] =[]

  constructor(http:HttpClient) 
  {
    this.http = http
   }

  fetched:boolean = false;
   //to fetch employees data from json file
   fetchEmployee()
   {
     this.http.get('./assets/Emp.json').subscribe(data=>
      {
        if(!this.fetched)
        {
          this.convert(data);
          this.fetched = true;
        }
      })
   }
   //returning the employee array
   getEmployees():Employee[]
   {
     return this.employees;
   }

   //to convert the data into employee object 
   convert(data:any)
   {
      for(let o of data)
      {
        let e = new Employee(o.id,o.name,o.sal,o.gender);
        this.employees.push(e);
      }
   }
   // to delete records
delete(id:number)
{
  let foundIndex:number = -1;
  for(let i = 0;i<this.employees.length;i++)
  {
    let e = this.employees[i]
    if(id==e.id)
    {
      foundIndex = i;
      break;
    }
  }
  this.employees.splice(foundIndex,1)
}
//add
add(data:any)
{
  this.employees.push(data)
}
}


export class Employee
{
  id:number
  name:string
  sal:number
  gender:string;
  
    constructor(id:number,name:string,sal:number,gender:string) { 
      
      this.name = name
      this.sal = sal
      this.id = id
      this.gender = gender
    }

}
