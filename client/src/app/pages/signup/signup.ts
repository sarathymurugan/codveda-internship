import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signupcomponent {
  name = '';
  email = '';
  password = '';
  role = 'user';
  error = '';
  l: string='http://localhost:4200/login';
  // Component logic goes here
  constructor(private authService: AuthService, private router: Router) {}
    // Initialization code if needed
async onSignup() {
    try {
      await this.authService.signup({
        name: this.name,
        email: this.email,
        password: this.password,
        role: this.role
      });
      this.router.navigate(['/login']);
    } catch (err: any) {
      this.error = err.response?.data?.message || 'Signup failed';
    }
  }
}