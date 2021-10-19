import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-grupo',
  templateUrl: './header-grupo.component.html',
  styleUrls: ['./header-grupo.component.css']
})
export class HeaderGrupoComponent implements OnInit {

  grupo:number;
  proyecto:string;
  constructor() {
    this.grupo = 6;
    this.proyecto = 'BOOST MY ENTERPRISE';
  }
  ngOnInit(): void {
  }

}
