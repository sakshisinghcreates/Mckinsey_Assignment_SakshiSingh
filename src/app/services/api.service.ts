import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/login`, data);
  }

  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/questions`);
  }

  getCandidates(): Observable<any> {
    return this.http.get(`${this.baseUrl}/candidates`);
  }

  createQuestion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/questions`, data);
  }

  updateQuestion(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/questions/${id}`, data);
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/questions/${id}`);
  }

  createCandidate(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/candidates`, data);
  }

  updateCandidate(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/candidates/${id}`, data);
  }

  deleteCandidate(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/candidates/${id}`);
  }
}

