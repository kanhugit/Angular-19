import { Component, ViewEncapsulation } from '@angular/core';
import { NoneComponent } from "../none/none.component";

@Component({
  selector: 'app-emulated',
  imports: [NoneComponent],
  encapsulation:ViewEncapsulation.Emulated,
  templateUrl: './emulated.component.html',
  styleUrl: './emulated.component.css'
})
export class EmulatedComponent {

}
