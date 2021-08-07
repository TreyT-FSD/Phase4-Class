import { Component, OnInit } from '@angular/core';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  /**
   * Creating a visitor to be used by the contact form.
   */
  visitor: Visitor = new Visitor();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * A method to handle submit action
   */
  onSubmit(){
    console.log(this.visitor);
    this.visitor=new Visitor();
  }

}
