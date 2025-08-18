import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from "../../child/child.component";

@Component({
  selector: 'app-none',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <h2>Parent Component</h2>
    <app-child></app-child>
  `,
  styles: [`
    h2 { color: yellow; }
  `],
  imports: [ChildComponent]
})
export class NoneComponent {

}
