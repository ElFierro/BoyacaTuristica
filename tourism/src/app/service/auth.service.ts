import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:5000'; 
  isLoggedIn = false;
  username: string | null = null;

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        this.isLoggedIn = true;
        this.username = username;
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.username = null;
    Swal.fire({
      text: '¡Hasta luego!'
    });
  }
}