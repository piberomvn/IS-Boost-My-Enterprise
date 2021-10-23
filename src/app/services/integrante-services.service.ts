import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegranteServicesService {
//test

  private port='8000';
  private host= 'localhost';

  private url='http://'+this.host+':'+this.port+'/integrantes';

  constructor(private http:HttpClient) { }

  getIntegrantes():Observable<any>{
    return this.http.get(this.url)
  }
}
