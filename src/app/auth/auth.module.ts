import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule, // Para usar [(ngModel)]
    CommonModule, // Para usar *ngIf y otras directivas comunes

  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
