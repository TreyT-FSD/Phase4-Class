import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();
  employeeForm: FormGroup;

  constructor(private _employeeService: EmployeeService, private _formBuilder: FormBuilder, private _router: Router) {
    this.employeeForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      salary: [0, [Validators.required]],
      designation: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  //this is a shortcut to make it easier to access the form validators in the view
  get f() {
    return this.employeeForm.controls;
  }

  addEmployee() {

    //reactive form validation. more at https://bit.ly/3AIOCyh

    console.log(this.employee);  //the employee from the form
    this._employeeService.AddEmployee(this.employee).subscribe(
      result => {
        console.log(result);  //the employee that was just added via the service
        alert("Employee Added Successfully.")
        this._router.navigate(['/employees']);
      }, error => {
        console.log(error);
      });
  }

}
