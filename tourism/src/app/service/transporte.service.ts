import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Transporte } from '../model/transporte';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  private http=inject(HttpClient)
  constructor() { }

  public url:string="http://localhost:8000/"

  public getAllTransporte(municipio:string):Observable<Transporte[]>{
    return this.http.get<Transporte[]>(`${this.url}transporte?municipio=${municipio}`)
  }

}
