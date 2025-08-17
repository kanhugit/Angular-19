import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  imports: [CommonModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export class ComponentComponent {
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() status: string = '';
}
