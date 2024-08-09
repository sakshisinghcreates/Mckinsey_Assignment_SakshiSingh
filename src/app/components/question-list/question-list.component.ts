import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: any[] = [];
  sortBy: string = 'lastUpdated'; // Default sorting criterion

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
      this.sortQuestions(this.sortBy);
    }, error => {
      console.error(error);
    });
  }

  sortQuestions(by: string) {
    this.questions.sort((a, b) => (a[by] > b[by] ? 1 : -1));
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortBy = target.value;
    this.sortQuestions(this.sortBy);
  }
}

