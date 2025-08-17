import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  imports: [CommonModule],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
roles = ['Admin', 'Editor', 'Viewer'];
  selectedRole = signal<string>('Admin');  // default

  changeRole(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedRole.set(value);
  }
}
