import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  title="Form Validation"
        login={name:"",age:0,pass:"",email:""};

} 
