import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  userDetail: User = new User();

  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this._http.get<User>("https://jsonplaceholder.typicode.com/users/" + this.id).subscribe((result) => {
      this.userDetail = result;
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

}

