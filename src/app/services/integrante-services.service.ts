import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegranteServicesService {
//test

  private port='8000';
  private host= '127.0.0.1';
  private host_server='http://146.83.198.35:1068';
  private api_server='integrantes';
  //private url='http://'+this.host+':'+this.port+'/integrantes';
  private url=this.host_server+"/api/"+this.api_server;

  constructor(private http:HttpClient) { }

  getIntegrantes():Observable<any>{
    return this.http.get(this.url)
  }


  
}
