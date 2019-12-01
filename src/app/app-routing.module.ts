import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

import { AuthGuard } from 'src/app/services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: MenuComponent, canActivate: [AuthGuard]},
  
  { path: '**', redirectTo: 'dashboard', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
