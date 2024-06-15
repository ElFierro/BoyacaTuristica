import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalService } from '../../../service/modal.service';
import { AuthService } from '../../../service/auth.service';

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
          // Manejo de la respuesta del servidor
          console.log('Registro exitoso:', response);
          this.closeModal();
        },
        error => {
          // Manejo de errores
          console.error('Error en el registro:', error);
        }
      );
    }
  }
}