import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif',
  imports: [FormsModule,CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css',
})
export class NgifComponent {
  isLoggedIn = false;
  username = '';
  password = '';

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.isLoggedIn = true;
    } else {
      alert('Invalid credentials ❌');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}
