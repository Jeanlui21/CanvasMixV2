import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { RecompensasComponent } from './components/recompensas/recompensas.component';
import { CursoComponent } from './components/curso/curso.component'


import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'curso/:id/:coursename', component: CursoComponent, canActivate: [AuthGuard]},
  
  
  { path: '**', redirectTo: 'dashboard', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
