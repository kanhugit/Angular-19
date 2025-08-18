import { Component } from '@angular/core';
import { LoginFormComponent } from "../../template-driven-forms/login-form/login-form.component";
import { RegisterComponent } from "../../register/register.component";

@Component({
  selector: 'app-login',
  imports: [LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
