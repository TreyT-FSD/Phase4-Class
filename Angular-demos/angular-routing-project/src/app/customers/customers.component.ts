import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customerList: Array<Customer> = [
    { customerId: 101, customerName: "timmy", customerAmount: 5000},
    { customerId: 102, customerName: "bob", customerAmount: 6000},
    { customerId: 103, customerName: "joe", customerAmount: 7000},
    { customerId: 104, customerName: "jack", customerAmount: 8000},
    { customerId: 105, customerName: "jim", customerAmount: 9000},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
