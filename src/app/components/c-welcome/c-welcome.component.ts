import { Component, OnInit } from '@angular/core';
import { Integrante } from 'src/app/interfaces/Integrantes';
import { IntegranteServicesService } from 'src/app/services/integrante-services.service';

@Component({
  selector: 'app-c-welcome',
  templateUrl: './c-welcome.component.html',
  styleUrls: ['./c-welcome.component.css']
})
export class CWelcomeComponent implements OnInit {


  grouplist:Integrante[];

  constructor(private _servicio_integrantes:IntegranteServicesService) {
    this.grouplist = []

  }

  getGroupList(){
    this._servicio_integrantes.getIntegrantes().subscribe(
      lista => {
        /*for (let aux of lista){
          this.grouplist.push(aux)
        }*/
        this.grouplist = lista;
      }
    );
  }

  ngOnInit(): void {
    this.getGroupList();
  }
}
