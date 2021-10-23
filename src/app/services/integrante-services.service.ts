import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegranteServicesService {
//test
  private url='http://172.17.0.2:81/integrantes';

  constructor(private http:HttpClient) { }

  getIntegrantes():Observable<any>{
    return this.http.get(this.url)
  }
}
