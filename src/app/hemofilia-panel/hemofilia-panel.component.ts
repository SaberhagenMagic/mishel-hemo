import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hemofilia-panel',
  templateUrl: './hemofilia-panel.component.html',
  styleUrls: ['./hemofilia-panel.component.css']
})
export class HemofiliaPanelComponent implements OnInit {
  showRegister = false;

  constructor() { }

  ngOnInit() {
  }

  goRegister() {
    this.showRegister = !this.showRegister;
  }
}
