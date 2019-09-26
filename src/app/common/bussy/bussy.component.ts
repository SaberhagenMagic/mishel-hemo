import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bussy',
  template: `
    <div class="alert-info text-center mt-3 animated fadeIn faster">
    <h4 class="alert-heading">Cargando</h4>
    <p><i class="fa fa-sync fa-spin fa-2x"></i></p>
    <p class="mb-0">Espere por favor</p>
    </div>`
})
export class BussyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
