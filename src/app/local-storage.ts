export interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private storageKey = 'usuarios';
  private currentUserSubject = new BehaviorSubject<Usuario | null>(this.getCurrentUserFromStorage());

  currentUser$ = this.currentUserSubject.asObservable();

  // Registrar usuário
  registerUser(user: Usuario): void {
    const usuarios = this.getUsers();
    usuarios.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
  }

  // Login
  login(email: string, senha: string): boolean {
    const usuarios = this.getUsers();
    const user = usuarios.find(u => u.email === email && u.senha === senha);
    if(user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    }
    return false;
  }

  // Logout
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Lista de usuários
  getUsers(): Usuario[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  // Método privado apenas para inicializar currentUser
  private getCurrentUserFromStorage(): Usuario | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  
}