import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCandidates().subscribe(response => {
      this.candidates = response;
    }, error => {
      console.error(error);
    });
  }
}

