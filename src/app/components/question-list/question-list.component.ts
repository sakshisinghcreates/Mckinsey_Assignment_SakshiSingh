import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
    }, error => {
      console.error(error);
    });
  }
}
