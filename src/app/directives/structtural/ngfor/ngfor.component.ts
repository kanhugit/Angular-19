import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-ngfor',
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css',
})
export class NgforComponent {
  products: product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 1299,
      description: 'Latest iPhone with A17 Pro chip and Titanium build.',
      image: 'https://www.iphoned.nl/wp-content/uploads/2023/06/iphone-15-nieuwe-renders.jpg',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: 1199,
      description: 'Powerful Android flagship with amazing camera features.',
      image: 'https://tse3.mm.bing.net/th/id/OIP.nDnOJh_w5tnwiNYnwGptUQHaI9?pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      price: 399,
      description: 'Industry-leading noise cancelling headphones.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.jzVtyTSDIE3hMKn307UNFQHaHa?pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'MacBook Air M3',
      price: 1499,
      description: 'Ultra-light laptop with blazing fast M3 chip.',
      image: 'https://static.macway.com/images/p/g/originalid_2000/200/2271/main/2271_09a6991.jpg',
    },
  ];
}
