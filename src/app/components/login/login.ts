import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule],
  standalone: true
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (res.role === 'INTERVIEWER') {
          this.router.navigate(['/interviewer-dashboard']);
        } else {
          this.router.navigate(['/']); 
        }
      },
      error: (err) => {
        alert("Invalid Email or Password!");
      }
    });
  }
}