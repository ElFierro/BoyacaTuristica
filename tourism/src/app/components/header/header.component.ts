import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginModalComponent } from "../auth/login-modal/login-modal.component";
import { RegisterModalComponent } from "../auth/register-modal/register-modal.component";
import { ModalService } from '../../service/modal.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [ReactiveFormsModule, RouterOutlet, RouterLink, RouterLinkActive, LoginModalComponent, RegisterModalComponent, NgIf]
})
export class HeaderComponent {
  isMenuHidden = true;
  isLoginModalOpen = false;
  isRegisterModalOpen = false;
  
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }


  
    constructor(private modalService: ModalService) {
      this.modalService.modalState$.subscribe((isOpen) => {
        this.isLoginModalOpen = isOpen;
        this.isRegisterModalOpen = isOpen;
      });
    }
  
    openLoginModal() {
      this.isLoginModalOpen = true;
    }
  
    openRegisterModal() {
      this.isRegisterModalOpen = true;
    }
  }
