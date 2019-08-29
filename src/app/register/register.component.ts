import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

import { UsuarioModel } from "../models/usuario.model";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frmUsuario: FormGroup;
  hide = true;
  rememberme: boolean = false;

  constructor( private auth: AuthService, private router: Router ) { }

  ngOnInit() {
    this.frmUsuario = new FormGroup({
      'emailControl' : new FormControl('',[Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'passControl': new FormControl('',[Validators.required, Validators.minLength(6)]),
      'nombreControl': new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }

registraNuevo() {
  // console.log(this.frmUsuario);
  let usuario = new UsuarioModel();
  usuario.email = this.frmUsuario.value['emailControl'];
  usuario.nombre = this.frmUsuario.value['nombreControl'];
  usuario.password = this.frmUsuario.value['passControl'];
  // console.log(usuario);

  /* Swal.fire({
    allowOutsideClick: false,
    type: 'info',
    text: 'Espere por favor...'
  });
  Swal.showLoading(); */

  this.auth.newUser( usuario )
    .subscribe( response => {
      console.log(response);
      // Swal.close();

      this.router.navigateByUrl('/login');
    }, (err) => {
      console.error(err.error.error.message);
      /* Swal.fire({
        type: 'error',
        title: 'Error al registrar',
        text: err.error.error.message
      }); */
    });
  }
}
