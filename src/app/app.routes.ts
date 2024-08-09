import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { RoleGuard } from './role.guard';  // Import the RoleGuard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'questions', 
    component: QuestionListComponent, 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'Admin' }  // Restrict to Admin role
  },
  { 
    path: 'candidates', 
    component: CandidateListComponent, 
    canActivate: [RoleGuard], 
    data: { expectedRole: 'Admin' }  // Restrict to Admin role
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


