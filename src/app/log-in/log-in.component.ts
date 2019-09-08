import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioModel } from "../models/usuario.model";
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  frmUser: FormGroup;
  hide = true;
  rememberme = false;

  constructor( private auth: AuthService, private router: Router) {
    this.frmUser = new FormGroup({
      'emailControl': new FormControl('',[Validators.required, 
                                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'passControl': new FormControl('', [Validators.required]),
      'rememberControl': new FormControl()
    });
  }

  ngOnInit() { }

  entrar() {
    // console.log(this.frmUser);
    let usuario = new UsuarioModel();
    usuario.email = this.frmUser.value['emailControl'];
    usuario.password = this.frmUser.value['passControl'];

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.auth.login( usuario ).subscribe( response => {
      //console.log(response);
      Swal.close();
      /* if (this.rememberme) {
        localStorage.setItem('email', usuario.email);
      } */

      this.router.navigateByUrl('/inicio');
    }, (err) => {
      console.error(err.error.error.message);
      Swal.fire({
        type: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    } );

  }

}
