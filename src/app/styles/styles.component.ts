import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  imports: [],
  template: `<div class="container">
    <h1>Components Templates</h1>
    <h3>Inline Template</h3>
    <h4>
      The Template contains the html markup to display component Template markup
      can be written in same file using template or external .html file path
      using templateUrl.
    </h4>
  </div>`, //Template property is used to add inline markup. Do not use <script> tag in template.
  styleUrl: './styles.component.css',
})
export class StylesComponent {}
