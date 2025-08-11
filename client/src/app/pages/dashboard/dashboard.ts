import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  name = '';
  price: any;
  description = '';
  editMode = false;
  editId: string | null = null;
  error = '';

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.products = await this.productService.getProducts();
    } catch (err: any) {
      this.error = err.message || 'Failed to load products';
    }
  }

  async saveProduct() {
      console.log('Save product called');
  if (!this.name || !this.price || !this.description) {
    this.error = 'All fields are required';
    return;
  }
  try {
    if (this.editMode && this.editId) {
      await this.productService.updateProduct(this.editId, {
        name: this.name,
        price: this.price,
        description: this.description
      });
      this.editMode = false;
      this.editId = null;
    } else {
      await this.productService.createProduct({
        name: this.name,
        price: this.price,
        description: this.description
      });
    }
    this.name = '';
    this.price = '';
    this.description = '';
    await this.loadProducts(); // Always reload after add/edit
    this.error = '';
  } catch (err: any) {
    this.error = err?.response?.data?.message || 'Error saving product';
  }
}

async deleteProduct(id: string) {
  try {
    await this.productService.deleteProduct(id);
    await this.loadProducts(); // Always reload from backend after delete
    this.error = '';
  } catch (err: any) {
    this.error = err?.response?.data?.message || 'Error deleting product';
  }
}

editProduct(p: any) {
  this.editMode = true;
  this.editId = p._id;
  this.name = p.name;
  this.price = p.price;
  this.description = p.description;
}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
