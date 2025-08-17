import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
products = [
    { id: 1, name: 'Laptop', price: 75000, available: true },
    { id: 2, name: 'Smartphone', price: 30000, available: true },
    { id: 3, name: 'Headphones', price: 2500, available: false },
    { id: 4, name: 'Smartwatch', price: 12000, available: true }
  ];
}
