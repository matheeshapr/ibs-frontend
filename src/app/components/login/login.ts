import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule, CommonModule, RouterModule],
  standalone: true
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    console.log('Login attempt started...');
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Login Response:', res);
        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (res.role === 'INTERVIEWER') {
          this.router.navigate(['/interviewer-dashboard']);
        } else {
          this.router.navigate(['/interviewers']);
        }
      },
      error: (err) => {
        console.error('Login Error:', err);
        alert("Invalid Email or Password!");
      }
    });
  }
}