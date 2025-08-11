import { Injectable } from '@angular/core';
import axios from 'axios';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private authService: AuthService) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return { Authorization: `Bearer ${token}` };
  }

  async getProducts() {
    const res = await axios.get(this.apiUrl, { headers: this.getAuthHeaders() });
    return res.data;
  }

  async createProduct(data: any) {
    const res = await axios.post(this.apiUrl, data, { headers: this.getAuthHeaders() });
    return res.data;
  }

  async updateProduct(id: string, data: any) {
    const res = await axios.put(`${this.apiUrl}/${id}`, data, { headers: this.getAuthHeaders() });
    return res.data;
  }

  async deleteProduct(id: string) {
    const res = await axios.delete(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
    return res.data;
  }
}
