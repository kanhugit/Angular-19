import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kyc-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './kyc-form.component.html',
  styleUrls: ['./kyc-form.component.css']
})
export class KycFormComponent {
  kycModel = {
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    pan: '',
    address: ''
  };

  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      console.log('KYC Form Data:', this.kycModel);
    } else {
      alert('Please fix the errors before submitting!');
    }
  }
}
