import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Form } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void{
    

    this._http.post('https://jsonplaceholder.typicode.com/users', this.user).subscribe(result => {
      alert("User Was Added");
      console.log(result);
      this._router.navigate(['/users']); //direct the user back to the users page
    }, (error) => {
      console.log(error);
    });
  }

}
