import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from '../components/question-list/question-list.component';  // Corrected path

@NgModule({
  declarations: [QuestionListComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ]
})
export class QuestionModule { }


