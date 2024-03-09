import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersListComponent },
];
