import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  s: string = 'http://localhost:4200/signup';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      const data = { email: this.email, password: this.password };
      await this.authService.login(data);
      this.router.navigate(['/dashboard']);
      // Redirect to home or dashboard after successful login
    } catch (error) {
      this.error = 'Login failed. Please check your credentials.';
    }
  }

  async signup() {
    try {
      const data = { email: this.email, password: this.password };
      await this.authService.signup(data);
      this.router.navigate(['/login']);
      // Redirect to home or dashboard after successful signup
    } catch (error) {
      this.error = 'Signup failed. Please try again.';
    }
  }

}

