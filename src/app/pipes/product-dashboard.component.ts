import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-dashboard.component.html',
})
export class ProductDashboardComponent {
  products = [
    {
      name: 'iPhone 16 Pro',
      category: 'Electronics',
      price: 129999,
      launchDate: new Date(2025, 4, 10),
      rating: 4.7563,
      discount: 0.15,
    },
    {
      name: 'Nike Air Zoom',
      category: 'Shoes',
      price: 8999,
      launchDate: new Date(2025, 2, 20),
      rating: 4.2335,
      discount: 0.2,
    },
    {
      name: 'LG Smart TV',
      category: 'Home Appliances',
      price: 55999,
      launchDate: new Date(2024, 11, 15),
      rating: 4.9876,
      discount: 0.1,
    },
  ];
}
