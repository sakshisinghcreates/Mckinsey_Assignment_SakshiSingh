import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.login({ username: this.username, password: this.password }).subscribe(response => {
      console.log(response);
      // Handle login success
    }, error => {
      console.error(error);
      // Handle login error
    });
  }
}
