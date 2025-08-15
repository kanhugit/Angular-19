import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  imports: [],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css',
})
export class TwoWayComponent {
  title = 'TWO-WAY data binding in Angular';
  name = '';
  updateName(x: Event) {
    // this.name = x.target.value;
    this.name=(x.target as HTMLInputElement).value;
  }
}
