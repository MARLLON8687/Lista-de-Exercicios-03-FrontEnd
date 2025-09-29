import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  username = '';
  password = '';
  showLoginModal = false;

  constructor(private router: Router) {}

  abrirLogin() {
    this.showLoginModal = true;
  }

  fecharLogin() {
    this.showLoginModal = false;
    this.username = '';
    this.password = '';
  }

  login() {
    if (!this.username?.trim()) {
      alert('Digite um usuário!');
      return;
    }

    localStorage.setItem('user', this.username);

    if (this.username.trim().toLowerCase() === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/dashboard']);
    }

    this.fecharLogin();
  }
}
