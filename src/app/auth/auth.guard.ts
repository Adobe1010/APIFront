import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    if (token && this.isTokenValid(token)) {
      return true; // Usuario autenticado
    } else {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
      return false;
    }
  }

  private isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decodedToken.exp > currentTime; // Verifica si el token no ha expirado
    } catch (error) {
      return false; // Token inválido
    }
  }
}
