import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateListComponent } from '../components/candidate-list/candidate-list.component';  // Corrected path

@NgModule({
  declarations: [CandidateListComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }

