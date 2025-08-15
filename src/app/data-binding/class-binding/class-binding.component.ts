import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  imports: [CommonModule], //or we can write imports: [NgClass,NgStyle]
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css',
})
export class ClassBindingComponent {
  title = 'Class Binding In Angular';
  para = 'text-danger';
  btn = 'btn btn-primary';
  card = 'card ';
  css = { color: '#00f', background: '#ccc' };
}
