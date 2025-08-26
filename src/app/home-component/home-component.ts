import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../local-storage';
import { Usuario } from '../local-storage';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  currentUser: Usuario | null = null;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onLogout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
