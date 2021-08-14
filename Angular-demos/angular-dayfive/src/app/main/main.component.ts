import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //launch the app with ng serve -o
  //launch the json-server with mock data using json-server .\employees.json --watch

  constructor() { }

  ngOnInit(): void {
  }

}
