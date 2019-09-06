import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { hemo } from "../models/hemo-v19.model";

@Component({
  selector: 'app-hemofilia-v19',
  templateUrl: './hemofilia-v19.component.html',
  styleUrls: ['./hemofilia-v19.component.css']
})
export class HemofiliaV19Component implements OnInit {

  patient = new hemo();
  frmPatient: FormGroup;

  constructor() {
    this.formPatienInit();
  }

  ngOnInit() {
  }

  formPatienInit(){
    this.frmPatient = new FormGroup({
      'registroId' : new FormControl(),
      'medico': new FormControl(),
      'rfc': new FormControl(),
      'beneficiario': new FormControl(),
      'apaterno': new FormControl(),
      'amaterno': new FormControl(),
      'nombre': new FormControl(),
      'fechanacimiento': new FormControl(),
      'talla': new FormControl(),
      'peso': new FormControl(),
      'fechadiagnostico': new FormControl(),
      'tipohemofilia': new FormControl(),
      'factordeficiente': new FormControl(),
      'ultimamedicion_fd': new FormControl(),
      'fechaultimamedicion_fd': new FormControl(),
      'articulacionblanco': new FormControl(),
      'tipohemofiliaseveridad': new FormControl(),
      'respuestadesmopresina': new FormControl(),
      'presentainhibidores': new FormControl(),
      'ultimamedicióninhibidores': new FormControl(),
      'fechaultimamedicióninhibidores': new FormControl(),
      'tratamientoprofilaxisdemanda': new FormControl(),
      'descripciónmedicamento': new FormControl(),
      'ui_kg': new FormControl(),
      'frecuenciasemanal': new FormControl()
    });
  }

  saveRegister() {
    console.log(this.frmPatient);
  }
}
