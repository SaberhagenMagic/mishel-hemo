import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Hemo } from "../models/hemo-v19.model";
import { HemoService } from "../services/hemo.service";
import { SnackMessageService } from "../services/snack-message.service";

@Component({
  selector: 'app-hemofilia-v19',
  templateUrl: './hemofilia-v19.component.html',
  styleUrls: ['./hemofilia-v19.component.css']
})
export class HemofiliaV19Component implements OnInit {
  @Input() id: string;

  patient = new Hemo();
  frmPatient: FormGroup;

  constructor(private hemoservice: HemoService, 
              private formBuilder: FormBuilder,
              private msg: SnackMessageService) {
    // this.frmPatient = this.createFormGroupHemo();
  }

  ngOnInit() {
    // console.log(`id: ${this.id}`);
    if ( this.id !== 'nuevo' ) {
      this.hemoservice.getPatient(this.id)
          .subscribe( (resp: any) => {
            console.log(resp);
            
          });
    } else {
      this.frmPatient = this.createFormGroup();
    }
  }

  private createFormGroup(){
    return this.formBuilder.group({
      registroId : [],
      medico: ['Prueba'],
      rfc: [],
      beneficiario: [],
      apaterno: [],
      amaterno: [],
      nombre: [],
      fechanacimiento: [],
      talla: [],
      peso: [],
      fechadiagnostico: [],
      tipohemofilia: [],
      factordeficiente: [],
      ultimamedicion_fd: [],
      fechaultimamedicion_fd: [],
      articulacionblanco: [],
      tipohemofiliaseveridad: [],
      respuestadesmopresina: false,
      presentainhibidores: false,
      ultimamedicióninhibidores: [],
      fechaultimamedicióninhibidores: [],
      tratamientoprofilaxisdemanda: [],
      descripciónmedicamento: [],
      ui_kg: [],
      frecuenciasemanal: []
    });
  }

  saveRegister() {
    console.log(this.frmPatient);
    this.patient = this.frmPatient.value;

    let requestePac: Observable<any>;

    // Swal.fire();
    // Swal.showLoading();
    
    if( this.patient.registroId ) {
      requestePac = this.hemoservice.updatePatient(this.patient);
    } else {
      requestePac = this.hemoservice.savePatient(this.patient);  
    }
        
    requestePac.subscribe((resp: any) => {
      console.log(resp);
      //this.frmPatient.setValue({registroId: resp.registroId});
      this.frmPatient.patchValue({registroId: resp.registroId});
      this.msg.showMessage('Guardado');
    });
  }
}
