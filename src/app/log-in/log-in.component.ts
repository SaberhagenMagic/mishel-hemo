import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  frmUser: FormGroup;
  hide = true;

  constructor() {
    this.frmUser = new FormGroup({
      'emailControl': new FormControl('',[Validators.required, 
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'passControl': new FormControl('', [Validators.required]),
      'rememberControl': new FormControl()
    });
  }

  ngOnInit() { }

  entrar() {
    console.log(this.frmUser);
  }

}
