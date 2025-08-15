import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    {
      name: 'Laptop',
      price: 55000,
      imageUrl:
        'https://tse3.mm.bing.net/th/id/OIP.TmdVZty6FfKab0vUeFwvaAHaEm?pid=Api&P=0&h=180',
    },
    {
      name: 'Mobile',
      price: 25000,
      imageUrl: 'https://www.techlasers.com/wp-content/uploads/2014/08/Mobile-Phone.jpg',
    },
    {
      name: 'Headphones',
      price: 3000,
      imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.FCB33TXqP_3eepbjjans_AHaHa?pid=Api&P=0&h=180',
    },
  ];
}
