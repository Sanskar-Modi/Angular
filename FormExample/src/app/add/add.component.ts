import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
employeeForm:FormGroup
  constructor() { }

  ngOnInit() {

    this.employeeForm = new FormGroup({
      fullName :new FormControl(),
      email:new FormControl()
    })
  }

  onSubmit():void{
    console.log(this.employeeForm.value)
    console.log(this.employeeForm.controls.fullName.value)
    alert(this.employeeForm.get("fullName").value)
  }

}
