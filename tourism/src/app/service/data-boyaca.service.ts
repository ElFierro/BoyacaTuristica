
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBoyaca } from '../model/dataBoyaca';

@Injectable({
  providedIn: 'root'
})
export class DataBoyacaService {

  constructor( private http: HttpClient) { }

  
  public url:string="http://localhost:8000/"

  public get_top_by_indicador_ano(indicadorName:string,ano:string):Observable<DataBoyaca[]>{
      return this.http.get<DataBoyaca[]>(`${this.url}getTopByIndicadorAno?indicadorName=${indicadorName}&ano=${ano}`)
  }


}
