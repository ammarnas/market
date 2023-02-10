import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    AllProductsComponent
  ]}
)
export class ProductsModule { }
