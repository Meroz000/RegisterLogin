import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { UserService } from '../local-storage';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss'
})
export class RegisterComponent {
  nome = '';
  email = '';
  senha = '';

  constructor(private userService: UserService, private router: Router) {}

  register(form: NgForm) {
    if (form.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    this.userService.registerUser({
      nome: this.nome,
      email: this.email,
      senha: this.senha
    });
  alert('Usuário registrado!');
  this.nome = '';
  this.email = '';
  this.senha = '';
  this.router.navigate(['/']);
  }
}
