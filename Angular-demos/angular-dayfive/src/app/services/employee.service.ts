import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee";

//example of a user created dependency
@Injectable()  
export class EmployeeService{

    messaage : string = "Employee Management System";

    constructor(private _http: HttpClient){}

    getEmployees(): Observable<Employee[]> {
        return this._http.get<Employee[]>('http://localhost:3000/employees');
    }

    getEmployeeById(){

    }

    AddEmployee(Employee:Employee): Observable<Employee>{
        return this._http.post<Employee>('http://localhost:3000/employees', Employee);

    }

    DeleteEmployee(id:number){

    }

    UpdateEmployeeById(employee:Employee, id:number){

    }
}