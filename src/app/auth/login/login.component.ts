import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email:string="";
  password:string="";
  errorMessage: any;

  constructor(private authService: AuthService, private router:Router){
    //this.email="cualquier@cosa.com";
    //this.password="cosa";
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token); // Guarda el token en el almacenamiento local
        this.router.navigate(['/dashboard']); // Redirige al usuario tras un inicio exitoso
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Error al iniciar sesión';
      },
    });
  }
}
