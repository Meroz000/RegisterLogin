import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../local-storage';
import { Usuario } from '../local-storage';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
  currentUser: Usuario | null = null;

  constructor(private userService: UserService) {
    this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
