import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee";

//example of a user created dependency
@Injectable()  
export class EmployeeService{

    messaage : string = "Employee Management System";
    API_URL: string = "http://localhost:3000";

    constructor(private _http: HttpClient){}

    getEmployees(): Observable<Employee[]> {
        return this._http.get<Employee[]>(`${this.API_URL}/employees`);
    }

    getEmployeeById(id:number): Observable<Employee>{
        return this._http.get<Employee>(`${this.API_URL}/employees/${id}`);
    }

    AddEmployee(Employee:Employee): Observable<Employee>{
        return this._http.post<Employee>(`${this.API_URL}/employees`, Employee);

    }

    DeleteEmployeeById(id:number): Observable<Employee>{
        return this._http.delete<Employee>(`${this.API_URL}/employees/${id}`);

    }

    UpdateEmployeeById(updatedEmployee:Employee, id:number): Observable<Employee>{
        return this._http.put<Employee>(`${this.API_URL}/employees/${id}`, updatedEmployee);

    }
}