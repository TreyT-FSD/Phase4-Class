import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();
  employeeForm: FormGroup;

  constructor(private _employeeService: EmployeeService, private _formBuilder: FormBuilder) {
    this.employeeForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      salary: [0, [Validators.required]],
      designation: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.employeeForm.controls;
  }

  addEmployee() {

    //reactive form validation
    if (this.employeeForm.valid) {
      console.log(this.employee);  //the employee from the form
      this._employeeService.AddEmployee(this.employee).subscribe(
        result => {
          console.log(result);  //the employee that was just added via the service
          alert("Employee Added Successfully.")
        }, error => {
          console.log(error);
        });
    } else{
      alert("Form is incomplete.")
      console.log("form invalid");
      
    }
    
  }

}
