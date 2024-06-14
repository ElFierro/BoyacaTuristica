import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);


  username!: string;
  password!: string;


  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful!', response);
        // Guarda el token en localStorage o maneja la respuesta como necesites
        localStorage.setItem('token', response.access_token);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
