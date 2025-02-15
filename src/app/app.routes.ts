import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MessengerComponent } from './components/messenger/messenger.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'messenger', component: MessengerComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'messenger' }
];
