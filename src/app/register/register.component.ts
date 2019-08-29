import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frmUsuario: FormGroup;
  hide = true;
  rememberme: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.frmUsuario = new FormGroup({
      'emailControl' : new FormControl('',[Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'passControl': new FormControl('',[Validators.required, Validators.minLength(6)]),
      'nombreControl': new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }

  registraNuevo() {
    console.log(this.frmUsuario);
  }
}
