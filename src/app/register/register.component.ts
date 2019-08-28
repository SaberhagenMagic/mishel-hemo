import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frmRegistro: FormGroup;

  constructor() { }

  ngOnInit() {
    this.frmRegistro = new FormGroup({
      'medico' : new FormControl('',[Validators.required]),
      'nombre': new FormControl('',[Validators.required, Validators.minLength(2)]),
      'apellido': new FormControl('',)
    });
  }

}
