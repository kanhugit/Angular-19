import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from './Login';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  title = 'Template Driven Forms ';
  model = new Login('', '', '', '', false);

  onSubmit(data:any){
    console.log(data.value)
  }

  
}
