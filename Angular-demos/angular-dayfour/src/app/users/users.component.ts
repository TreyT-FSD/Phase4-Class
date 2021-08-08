import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: Array<User> = new Array<User>();

  constructor(private _http: HttpClient) { } //added private http client

  ngOnInit(): void {
    this._http.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe((result) => {
      this.userList=result; //get the users from the rest api and store in local variable
      console.log(this.userList);
    }, (error) => {
      console.log("some error occured");
      console.log(error);
    });
  }
}
