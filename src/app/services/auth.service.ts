import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Puedes inicializarlo según tu lógica de autenticación

  isLoggedIn() {
    return this.isAuthenticated;
  }

  login() {
    // Lógica para iniciar sesión y establecer this.isAuthenticated en true
  }

  logout() {
    // Lógica para cerrar sesión y establecer this.isAuthenticated en false
  }
}
