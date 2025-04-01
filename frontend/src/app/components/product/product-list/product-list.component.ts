import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  protected mockProducts = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
    { id: 7, name: 'Product 7', price: 700 },
    { id: 8, name: 'Product 8', price: 800 },
    { id: 9, name: 'Product 9', price: 900 },
    { id: 10, name: 'Product 10', price: 1000 },
    { id: 11, name: 'Product 11', price: 1100 },
    { id: 12, name: 'Product 12', price: 1200 },
    { id: 13, name: 'Product 13', price: 1300 },
    { id: 14, name: 'Product 13', price: 1300 },
    { id: 15, name: 'Product 13', price: 1300 },
  ];
}
