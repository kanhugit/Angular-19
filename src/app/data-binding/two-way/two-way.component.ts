import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css',
})
export class TwoWayComponent {
  title = 'TWO-WAY data binding in Angular';
  name = '';
  updateName(x: Event) {
    // this.name = x.target.value;
    this.name = (x.target as HTMLInputElement).value;
  }

  price: number = 0;
  quantity: number = 1;
}
