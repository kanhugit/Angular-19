import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-kyc-reactive-form',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './kyc-reactive-form.component.html',
  styleUrl: './kyc-reactive-form.component.css'
})
export class KYCReactiveFormComponent {
kycForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.kycForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      dob: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      aadhaar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      pan: ['', [Validators.required, Validators.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)]],
      gender: ['', Validators.required],
      document: [null, Validators.required]
    });
  }

  get f() {
    return this.kycForm.controls;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.kycForm.patchValue({ document: file });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.kycForm.invalid) {
      return;
    }
    console.log('✅ KYC Submitted:', this.kycForm.value);
    alert('KYC Form Submitted Successfully!');
  }
}
