import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  http:HttpClient
department:Department[] = []
  constructor(http:HttpClient) {
    this.http = http
   }
   //to fetch data
fetched:boolean = false
   fetchEmployee()
   {
     this.http.get('./assets/department.json').subscribe(data=>
      {
        if(!this.fetched)
        {
          this.convertData(data)
          this.fetched = true;
        }
      })
   }
// to return data
   getData():Department[]
   {
    return this.department;
   }
// to convert data and store it in object
   convertData(data)
   {
    for(let o of data)
      {
        let e = new Department(o.dptId,o.dptName)
        this.department.push(e);
      }
   }
     // to delete records
delete(id:number)
{
  let foundIndex:number = -1;
  for(let i = 0;i<this.department.length;i++)
  {
    let e = this.department[i]
    if(id==e.deptId)
    {
      foundIndex = i;
      break;
    }
  }
  this.department.splice(foundIndex,1)
}
//add
add(data:any)
{
  this.department.push(data)
}
}


 export class Department{
  deptId
  deptName

  constructor(deptId,deptName)
  {
    this.deptId = deptId;
    this.deptName = deptName
  }
  
}