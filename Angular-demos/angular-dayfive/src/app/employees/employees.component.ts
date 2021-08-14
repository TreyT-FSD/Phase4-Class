import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title: string="";
  employees: Employee[]=[];

  constructor(private _http: HttpClient, private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.title=this._employeeService.messaage;
    this._employeeService.getEmployees().subscribe(
      (result) => {
        this.employees=result;
        console.log(this.employees);
      }, (error) => {
        console.log(error);
      });
  }

}
