import { Component } from '@angular/core';
import { UserService } from '../local-storage';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private userService: UserService) {}

  login() {
    if(this.userService.login(this.email, this.senha)) {
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha inválidos!');
    }
  }
}
