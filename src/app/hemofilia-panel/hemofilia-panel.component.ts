import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HemoService } from "../services/hemo.service";
import Swal from "sweetalert2";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hemofilia-panel',
  templateUrl: './hemofilia-panel.component.html',
  styleUrls: ['./hemofilia-panel.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HemofiliaPanelComponent implements OnInit {
  showRegister = false;
  rows: Observable<[]>;
  
  public columns: Array<any> = [
    { title: '', name: '' },
    { title: '#', name: 'orden', sort: 'asc' },
    { title: 'Med', name: 'medico' },
    { title: 'RFC', name: 'rfc' },
    { title: 'Benef', name: 'beneficiario' },
    { title: 'A. Paterno', name: 'apaterno' },
    { title: 'A. Materno', name: 'amaterno' },
    { title: 'Nom', name: 'nombre' },
    { title: 'Nac', name: 'fechanacimiento' },
    { title: 'Talla', name: 'talla' },
    { title: 'Peso', name: 'peso' },
    { title: 'Diag', name: 'fechadiagnostico' },
    { title: 'Tipo Hemo', name: 'tipohemofilia'},
    { title: 'Factor Def', name: 'factordeficiente'},
    { title: 'Ultima Me', name: 'ultimamedicion_fd'},
    { title: 'Fecha Me', name: 'fechaultimamedicion_fd'},
    { title: 'Artic B', name: 'articulacionblanco'},
    { title: 'T Hemo Seve', name: 'tipohemofiliaseveridad'},
    { title: 'Resp Desmo', name: 'respuestadesmopresina'},
    { title: 'Pres Inhib', name: 'presentainhibidores'},
    { title: 'Ultima Med Inhi', name: 'ultimamedicióninhibidores'},
    { title: 'Fecha Inhi', name: 'fechaultimamedicióninhibidores'},
    { title: 'Tratam Pro', name: 'tratamientoprofilaxisdemanda'},
    { title: 'Descrip Med', name: 'descripciónmedicamento'},
    { title: 'UI/kg', name: 'ui_kg'},
    { title: 'Frecuen', name: 'frecuenciasemanal'}

  ];

  constructor(private hemoSrv: HemoService ) {
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    // this.hemoSrv.getPatients()
    //     .subscribe( response => {
    //       console.log(response);
    //       Swal.close();
    //       this.rows = response;
    //     });
    this.rows = this.hemoSrv.getAllPatients();
  }

  ngOnInit() {
  }

  private goRegister() {
    this.showRegister = !this.showRegister;
  }


}
