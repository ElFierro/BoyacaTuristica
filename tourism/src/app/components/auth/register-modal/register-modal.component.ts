import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../service/modal.service';
import { AuthService } from '../../../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent  implements OnInit {
  registerForm: FormGroup;

  private authService = inject(AuthService);

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  closeModal(): void {
    this.modalService.close();
  }

  

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService.register(email, password).subscribe(
        response => {
         
          this.closeModal();
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Usuario creado correctamente!'
          });
        },
        error => {
          // Manejo de errores
          console.error('Error en el registro:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: 'Ha ocurrido un problema. Por favor, inténtalo nuevamente.'
          });
        }
      );
    }
  }
}