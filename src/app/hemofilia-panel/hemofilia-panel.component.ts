import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hemofilia-panel',
  templateUrl: './hemofilia-panel.component.html',
  styleUrls: ['./hemofilia-panel.component.css']
})
export class HemofiliaPanelComponent implements OnInit {
  showRegister = false;

  public rows: Array<any> = [];
  public columns: Array<any> = [];
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

  public data: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  goRegister() {
    this.showRegister = !this.showRegister;
  }
}
