import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //the user object to be used by the view
  userObj: any = {
    username: "",
    password: "",
    message: ""
  }

  //the login method the view will call
  login(){
    console.log(this.userObj);
    if(this.userObj.username == "trey" && this.userObj.password == "123"){ //we could call a login service here to validate the username and password
      this.userObj.message = "login success";
    }
    else{
      this.userObj.message = "login failed";
    }
  }
}
