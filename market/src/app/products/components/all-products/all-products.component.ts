import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{

  products : any[]=[];

  constructor (private productService :ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts()
    .subscribe((res:any) =>{
      this.products=res;
    })
  }
}
