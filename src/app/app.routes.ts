// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoleGuard } from './role.guard';  // Import the RoleGuard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'questions', 
    loadChildren: () => import('./question/question.module').then(m => m.QuestionModule), 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'Admin' }  // Restrict to Admin role
  },
  { 
    path: 'candidates', 
    loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule), 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'Admin' }  // Restrict to Admin role
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];



