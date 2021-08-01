import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { ICustomer } from '../models/customer.interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

//this is the model part of MVC
export class CustomerComponent  {

  //logic for customer goes here

  //interpolation binding example
  message: string = "Customer Management System";

  //defining a customer object here
  custObj: any = {
    custCode: 1001,
    custName: 'Tim',
    custAmount: 12000
  }

  newMessage: string = "This is a new message";

  //init a new customer with default constructor
  customerObj1 = new Customer();

  //creating new customer object with the values we set here
  customerObj2: Customer = {
    customerCode: "1003",
    customerName: "Test",
    customerAmount: 9876
  };

  customerObj3: ICustomer = {
    CustomerCode: "1004",
    CustomerName: "ICustomer",
    CustomerAmount: 123456
  }

}
