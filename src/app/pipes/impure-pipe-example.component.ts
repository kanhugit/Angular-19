import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImpurePipeExamplePipe } from "./impure-pipe-example.pipe";

@Component({
  selector: 'app-impure-pipe-example',
  templateUrl: './impure-pipe-example.component.html',
  imports: [CommonModule, FormsModule, ImpurePipeExamplePipe],
  styleUrls: [],
})
export class ImpurePipeExampleComponent {
  users: string[] = ['Kanhu', 'Charan', 'Behera', 'Angular', 'React', 'Node'];
  searchText: string = '';

  addUser() {
    this.users.push('NewUser ' + Math.floor(Math.random() * 100));
  }
}
