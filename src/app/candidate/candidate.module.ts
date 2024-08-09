import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateListComponent } from '../components/candidate-list/candidate-list.component';  // Corrected path

@NgModule({
  declarations: [CandidateListComponent],
  imports: [
    CommonModule,
    HttpClientModule,  // Add HttpClientModule here
    CandidateRoutingModule
  ]
})
export class CandidateModule { }

