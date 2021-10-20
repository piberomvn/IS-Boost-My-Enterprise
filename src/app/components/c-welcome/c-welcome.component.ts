import { Component, OnInit } from '@angular/core';
import { Integrante } from 'src/app/interfaces/Integrantes';

@Component({
  selector: 'app-c-welcome',
  templateUrl: './c-welcome.component.html',
  styleUrls: ['./c-welcome.component.css']
})
export class CWelcomeComponent implements OnInit {


  grouplist:Integrante[];
  constructor() {

    const franco:Integrante = {
      nombre:'Franco Alvarez Alvarado',
      cargo:'Arquitecto de Software',
      foto:'https://st3.depositphotos.com/12985790/19242/i/1600/depositphotos_192420104-stock-photo-portrait-handsome-stylish-african-american.jpg'
    };
    const marcelo:Integrante = {
      nombre:'Marcelo Ramirez Zapata',
      cargo:'Tester',
      foto:'https://st2.depositphotos.com/5061925/9505/i/950/depositphotos_95059366-stock-photo-cool-businessman-standing-on-grey.jpg'
    };
    const luis:Integrante = {
      nombre:'Luis Benitez Andrade',
      cargo:'Jefenitez',
      foto:'https://static8.depositphotos.com/1155356/1012/i/950/depositphotos_10125608-stock-photo-stock-photo-of-christian-bicycle.jpg'
    };
    this.grouplist = [luis,franco,marcelo];

    const edgar:Integrante = {
      nombre:'Edgar Araya Contreras',
      cargo:'Programador',
      foto:'https://st.depositphotos.com/1269204/1219/i/950/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg'
    };
    this.grouplist.push(edgar);

    const roman:Integrante = {
      nombre:'Cristobal Roman Leiva',
      cargo:'Programador',
      foto:'https://www.infogate.cl/wp-content/uploads/2021/06/IMG_9539-scaled.jpg'
    };
    this.grouplist.push(roman);
   }

  ngOnInit(): void {
  }
}
