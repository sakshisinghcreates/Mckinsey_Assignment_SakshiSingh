import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


