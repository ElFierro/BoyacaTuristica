import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private http=inject(HttpClient)
  constructor() { }

  
  public url:string="http://localhost:8000/"

  public getAllMunicipios():Observable<any>{
    return this.http.get<any>(this.url+"getAllMunicipios");
  }


}
