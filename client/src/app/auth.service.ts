import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  async signup(data: any) {
    const res = await axios.post(`${this.apiUrl}/signup`, data);
    localStorage.setItem('token', res.data.token);
    return res.data;
  }

  async login(data: any) {
    const res = await axios.post(`${this.apiUrl}/login`, data);
    localStorage.setItem('token', res.data.token);
    return res.data;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
