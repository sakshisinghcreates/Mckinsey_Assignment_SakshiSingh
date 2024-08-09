import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Register API
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/register`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Login API
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/login`, data).pipe(
      tap((response: any) => {
        // Store the token and role in local storage
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
      }),
      catchError(this.handleError)
    );
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the stored user role
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // Logout by clearing the local storage
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  // Get all questions
  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/questions`).pipe(
      map(response => response.map(question => ({
        ...question,
        lastUpdated: new Date(question.lastUpdated) // Ensure date is parsed correctly
      }))),
      catchError(this.handleError)
    );
  }

  // Get all candidates
  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/candidates`).pipe(
      map(response => response.map(candidate => ({
        ...candidate,
        createdDate: new Date(candidate.createdDate) // Ensure date is parsed correctly
      }))),
      catchError(this.handleError)
    );
  }

  // Create a new question
  createQuestion(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/questions`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing question
  updateQuestion(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/questions/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a question
  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/questions/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new candidate
  createCandidate(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/candidates`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing candidate
  updateCandidate(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/candidates/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a candidate
  deleteCandidate(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/candidates/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}



