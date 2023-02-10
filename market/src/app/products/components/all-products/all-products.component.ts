import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error , Try again');
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.productService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('Error , Try again');
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value === 'all')  ? this.getProducts() : this.getProductsByCategory(value);
  }
  getProductsByCategory(keyword: string) {
    this.loading = true;
    this.productService.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }

  
}
