import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfigComponent,
  ],
  imports: [
    FormsModule, // Para usar [(ngModel)]
    CommonModule, // Para usar *ngIf y otras directivas comunes

  ],
  providers: [],
  bootstrap: [ConfigComponent]
})
export class DataModule { }
