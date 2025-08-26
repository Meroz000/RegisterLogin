import { Component } from '@angular/core';
import { UserService } from '../local-storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if(this.userService.login(this.email, this.senha)) {
      alert('Login bem-sucedido!');
      this.router.navigate(['/']);
    } else {
      alert('Email ou senha inválidos!');
    }
  }
}
