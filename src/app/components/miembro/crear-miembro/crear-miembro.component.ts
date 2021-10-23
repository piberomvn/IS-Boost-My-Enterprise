import { Component, OnInit } from '@angular/core';
import { IntegranteServicesService } from 'src/app/services/integrante-services.service';

@Component({
  selector: 'app-crear-miembro',
  templateUrl: './crear-miembro.component.html',
  styleUrls: ['./crear-miembro.component.css']
})
export class CrearMiembroComponent implements OnInit {



  nombre:string;
  url_foto:string;
  cargo:string;

  constructor( private integranteService: IntegranteServicesService){ 

    this.nombre="";
    this.url_foto="";
    this.cargo="";


  }

  ngOnInit(): void {
  }

  guardarIntegrante(): void {
    this.nombre='test';
    console.log('guardar');



  }


}
