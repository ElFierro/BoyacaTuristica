import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Hoteles } from '../model/hoteles';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private http=inject(HttpClient)
  public url:string="http://localhost:8000/"
  constructor() { }
  hola:string=""

  public getHotelesIn(municipio:string):Observable<Hoteles[]>{
    return this.http.get<Hoteles[]>(this.url+"getHotelesIn?municipio="+municipio);
  }
  public getAgenciasIn(municipio:string):Observable<Hoteles[]>{
    return this.http.get<Hoteles[]>(this.url+"getAgenciasIn?municipio="+municipio);
  }





}
