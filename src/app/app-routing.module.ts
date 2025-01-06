import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { PullDocumentsComponent } from './pull-documents/pull-documents.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { ConfigComponent } from './config/config.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [
  {path:'login',component:LoginComponent}, // Ruta abierta para el login
  {
    path: '',
    canActivate: [AuthGuard], // Protege todas las rutas secundarias excepto 'login'
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'PullDocuments', component: PullDocumentsComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'integrations', component: IntegrationsComponent},
      {path: 'Users', component: UsersComponent},
      {path: 'Config', component: ConfigComponent},
    ]
  },
  {path: '**', redirectTo: '/login'} //Redirige rutas no encontradas a login
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
