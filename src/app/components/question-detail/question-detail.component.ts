import { Component } from '@angular/core';
import tinymce from 'tinymce';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  editor: any;

  ngOnInit() {
    this.editor = tinymce.init({
      selector: '#editor'
    });
  }

  saveQuestion() {
    const content = this.editor.getContent();
    // Save content to backend
  }
}



