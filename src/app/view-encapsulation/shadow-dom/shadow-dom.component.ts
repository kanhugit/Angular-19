import { Component, ViewEncapsulation } from '@angular/core';

import { StudentResultComponent } from "../../student-result/student-result.component";

@Component({
  selector: 'app-shadow-dom',
  imports: [ StudentResultComponent],
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <h2>Parent Component</h2>
    <app-student-result></app-student-result>
  `,
  styles: [`
    h2 { color: green; }
  `]
})
export class ShadowDOMComponent {

}
