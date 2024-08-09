import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from '../components/question-list/question-list.component';  // Corrected path

@NgModule({
  declarations: [QuestionListComponent],
  imports: [
    CommonModule,
    HttpClientModule,  // Add HttpClientModule here
    QuestionRoutingModule
  ]
})
export class QuestionModule { }



