import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { Signupcomponent } from './pages/signup/signup';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: Signupcomponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

export class AppRoutingModule {}
