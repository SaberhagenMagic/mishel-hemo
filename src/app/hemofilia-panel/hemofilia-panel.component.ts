import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HemoService } from "../services/hemo.service";
import Swal from "sweetalert2";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hemofilia-panel',
  templateUrl: './hemofilia-panel.component.html',
  styleUrls: ['./hemofilia-panel.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HemofiliaPanelComponent implements OnInit {
  showRegister = false;
  rows$: Observable<any[]>;
  id: string;
  // { title: '', key: 'registroId', pin: "left", width: "50", class: "tdMenu" },
  pacColumns = [  
    { title: '#', key: 'orden', type:'number', width:'50' },
    { title: 'Med', key: 'medico' },
    { title: 'RFC', key: 'rfc' },
    { title: 'Benef', key: 'beneficiario' },
    { title: 'A. Paterno', key: 'apaterno' },
    { title: 'A. Materno', key: 'amaterno' },
    { title: 'Nom', key: 'nombre' },
    { title: 'Nac', key: 'fechanacimiento' },
    { title: 'Talla', key: 'talla' },
    { title: 'Peso', key: 'peso' },
    { title: 'Diag', key: 'fechadiagnostico' },
    { title: 'Tipo Hemo', key: 'tipohemofilia'},
    { title: 'Factor Def', key: 'factordeficiente'},
    { title: 'Ultima Me', key: 'ultimamedicion_fd'},
    { title: 'Fecha Me', key: 'fechaultimamedicion_fd'},
    { title: 'Artic B', key: 'articulacionblanco'},
    { title: 'T Hemo Seve', key: 'tipohemofiliaseveridad'},
    { title: 'Resp Desmo', key: 'respuestadesmopresina'},
    { title: 'Pres Inhib', key: 'presentainhibidores'},
    { title: 'Ultima Med Inhi', key: 'ultimamedicióninhibidores'},
    { title: 'Fecha Inhi', key: 'fechaultimamedicióninhibidores'},
    { title: 'Tratam Pro', key: 'tratamientoprofilaxisdemanda'},
    { title: 'Descrip Med', key: 'descripciónmedicamento'},
    { title: 'UI/kg', key: 'ui_kg'},
    { title: 'Frecuen', key: 'frecuenciasemanal'}

  ];

  constructor(private hemoSrv: HemoService ) {
    this.refreshPanel();
  }

  ngOnInit() {  }
  
  showloadingMsg() {
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
  }
  
  refreshPanel() {
    this.showloadingMsg();
    
    this.hemoSrv.getPatients()
    .subscribe( (response: any[]) => {
      // console.log(response);
      Swal.close();
      this.rows$ = of(response);
    });
  }

  findRegister(idReg: string) {
    let _regist: any;
    return _regist;
  }
  
  goRegister(id: string) {
    this.id = id;
    this.showRegister = !this.showRegister;
  }

  editRegist(idReg: string) {
    // let item = this.findRegister(idReg);
    // console.log(idReg);
    this.goRegister(idReg);
  }
  
  deleteRegist(idReg: string){
    let item = this.findRegister(idReg);
    console.log(item);
  }

}
