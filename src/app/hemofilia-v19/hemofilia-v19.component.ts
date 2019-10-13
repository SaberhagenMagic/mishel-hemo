import { Component, OnInit, Input, Output } from '@angular/core';
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
  bussy = false;

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
          .subscribe( (resp: Hemo) => {
            resp.registroId = this.id;
            // console.log(resp);
            this.frmPatient = this.createFormGroup(resp);
          });
    } else {
      this.frmPatient = this.createNewFormGroup();
    }
  }

  private createNewFormGroup() {
    return this.formBuilder.group({
      registroId : [],
      medico: ['', [Validators.required]],
      rfc: ['', [Validators.required]],
      beneficiario: ['',Validators.required],
      apaterno: ['', [Validators.required]],
      amaterno: ['', Validators.required],
      nombre: ['', [Validators.required]],
      fechanacimiento: ['', Validators.required],
      talla: ['', Validators.required],
      peso: ['', Validators.required],
      fechadiagnostico: ['', Validators.required],
      tipohemofilia: ['', Validators.required],
      factordeficiente: ['', Validators.required],
      ultimamedicion_fd: ['', Validators.required],
      fechaultimamedicion_fd: ['', Validators.required],
      articulacionblanco: ['', Validators.required],
      tipohemofiliaseveridad: ['', Validators.required],
      respuestadesmopresina: false,
      presentainhibidores: false,
      ultimamedicióninhibidores: ['', Validators.required],
      fechaultimamedicióninhibidores: ['', Validators.required],
      tratamientoprofilaxisdemanda: ['', Validators.required],
      descripciónmedicamento: ['', Validators.required],
      ui_kg: ['', Validators.required],
      frecuenciasemanal: ['', Validators.required]
    });
  }

  private createFormGroup(val: Hemo) {
    console.log(val);
    
    return this.formBuilder.group({
      registroId : [val.registroId],
      medico: [val.medico, [Validators.required]],
      rfc: [val.rfc],
      beneficiario: [val.beneficiario],
      apaterno: [val.apaterno, [Validators.required]],
      amaterno: [val.amaterno],
      nombre: [val.nombre, [Validators.required]],
      fechanacimiento: [val.fechanacimiento],
      talla: [val.talla],
      peso: [val.peso],
      fechadiagnostico: [val.fechadiagnostico],
      tipohemofilia: [val.tipohemofilia],
      factordeficiente: [val.factordeficiente],
      ultimamedicion_fd: [val.ultimamedicion_fd],
      fechaultimamedicion_fd: [val.fechaultimamedicion_fd],
      articulacionblanco: [val.articulacionblanco],
      tipohemofiliaseveridad: [val.tipohemofiliaseveridad],
      respuestadesmopresina: val.respuestadesmopresina,
      presentainhibidores: val.presentainhibidores,
      ultimamedicióninhibidores: [val.ultimamedicióninhibidores],
      fechaultimamedicióninhibidores: [val.fechaultimamedicióninhibidores],
      tratamientoprofilaxisdemanda: [val.tratamientoprofilaxisdemanda],
      descripciónmedicamento: [val.descripciónmedicamento],
      ui_kg: [val.ui_kg],
      frecuenciasemanal: [val.frecuenciasemanal]
    });
  }

  saveRegister() {
    this.bussy = true;
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
      this.bussy = false;
      
      //this.frmPatient.setValue({registroId: resp.registroId});
      this.frmPatient.patchValue({registroId: resp.registroId});
      this.msg.showMessage('Guardado');
    }, (err => {
      this.bussy = false;
      console.error(err);
    }));
  }
}
