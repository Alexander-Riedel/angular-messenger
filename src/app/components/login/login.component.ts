import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) { }

  login() {
    this.authService.loginWithGoogle().subscribe(user => {
      if (user) {
        console.log('Eingeloggt als:', user.displayName);
      }
    });
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('Ausgeloggt');
    });
  }
}
