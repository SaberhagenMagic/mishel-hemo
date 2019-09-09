import { Component, OnInit } from '@angular/core';
import { HemoService } from "../services/hemo.service";
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-hemofilia-panel',
  templateUrl: './hemofilia-panel.component.html',
  styleUrls: ['./hemofilia-panel.component.css']
})
export class HemofiliaPanelComponent implements OnInit {
  showRegister = false;

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Med', name: 'medico'},
    {title: 'Benef', name: 'beneficiario'},
    {title: 'Nom', name: 'nombre'}
  ];
  public page: number = 1;
  public itemPerPage: number = 10;
  public maxSise : number = 5;
  public length : number = 0;

  public config: any = {
    paging: true,
    sorting: { columns: this.columns },
    filterring: { filterring: '' },
    className: ['table-striped', 'table-bordered']
  };

  // public data: Array<any> = [];

  constructor(private hemoSrv: HemoService ) {
    this.hemoSrv.getPatients()
        .subscribe( response => {
          console.log(response);
          this.rows = response;
        });
  }

  ngOnInit() {

  }

  goRegister() {
    this.showRegister = !this.showRegister;
  }
}
