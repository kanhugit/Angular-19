import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-pure-pipe-example',
  imports: [FormsModule, CommonModule, CapitalizePipe],
  templateUrl: './pure-pipe-example.component.html',
  styleUrls: [],
})
export class PurePipeExampleComponent {
  users: string[] = ['kanhu', 'asif', 'rahul', 'priya'];

  addUser(newUser: string) {
    this.users = [...this.users, newUser]; // New array → pipe triggers again
  }
}
