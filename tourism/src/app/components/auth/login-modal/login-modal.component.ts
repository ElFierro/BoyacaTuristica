import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../service/modal.service';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../service/auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent  implements OnInit {
  private authService = inject(AuthService);
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(email + password)
      this.authService.login(email, password).subscribe(
        response => {
          localStorage.setItem('token', response.access_token);
          this.closeModal();
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido de vuelta!'
          });
        },
        error => {
          console.error('Error en el inicio de sesión:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error en el inicio de sesión',
            text: 'Por favor, verifica tus credenciales e intenta nuevamente.'
          });
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }

  closeModal(): void {
    this.modalService.close();
  }
  
}
