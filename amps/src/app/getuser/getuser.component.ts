import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {
 @ViewChild('myForm')
 private myForm: NgForm;
 username:string;

  constructor() { }

  ngOnInit() {
  }

  register (myForm: NgForm) {
    console.log('Successful registration');
    console.log(myForm);
  }
}
