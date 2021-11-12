import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Integrante } from 'src/app/interfaces/Integrantes';
import { IntegranteServicesService } from 'src/app/services/integrante-services.service';

@Component({
  selector: 'app-crear-miembro',
  templateUrl: './crear-miembro.component.html',
  styleUrls: ['./crear-miembro.component.css']
})
export class CrearMiembroComponent implements OnInit {

  //formgroup despues
  integrante_list:Integrante[];
  nombre = new FormControl('');
  url_foto = new FormControl('');
  cargo = new FormControl('');
 

  constructor( private integranteService: IntegranteServicesService){ 

    this.integrante_list=[];

  }

  ngOnInit(): void {
  }

  guardarIntegrante(): void {
    
    console.log('guardar:'+this.nombre.value);



  }


}
