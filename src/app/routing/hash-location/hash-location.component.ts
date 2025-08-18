import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hash-location',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './hash-location.component.html',
  styleUrl: './hash-location.component.css'
})
export class HashLocationComponent {

}
