import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../service/modal.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent  implements OnInit {
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
      console.log(this.loginForm.value);
      this.closeModal();
    }
  }

  closeModal(): void {
    this.modalService.close();
  }
  
}
