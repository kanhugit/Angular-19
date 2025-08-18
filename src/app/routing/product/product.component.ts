import { Component } from '@angular/core';
import { ProductListComponent } from "../../product-list/product-list.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [ProductListComponent, RouterOutlet,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {}
