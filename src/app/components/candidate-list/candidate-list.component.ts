import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: any[] = [];
  sortBy: string = 'createdDate'; // Default sorting criterion

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCandidates().subscribe(response => {
      this.candidates = response;
      this.sortCandidates(this.sortBy);
    }, error => {
      console.error(error);
    });
  }

  sortCandidates(by: string) {
    this.candidates.sort((a, b) => (a[by] > b[by] ? 1 : -1));
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortBy = target.value;
    this.sortCandidates(this.sortBy);
  }
}



