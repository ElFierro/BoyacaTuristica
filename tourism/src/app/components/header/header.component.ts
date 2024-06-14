import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuHidden = true;

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
