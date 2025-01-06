import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReportsComponent } from './reports/reports.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { UsersComponent } from './users/users.component';
import { PullDocumentsComponent } from './pull-documents/pull-documents.component';
import { DataService } from './config/data.service';
import { FormsModule } from '@angular/forms';
import { DataModule } from './config/data.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    InvoicesComponent,
    ReportsComponent,
    IntegrationsComponent,
    UsersComponent,
    PullDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    DataModule
    
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    [DataService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
