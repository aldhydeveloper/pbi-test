import { Routes } from '@angular/router';
import { DashboardComponent } from './web/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
