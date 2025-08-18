import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-from',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './demo-from.component.html',
  styleUrl: './demo-from.component.css'
})
export class DemoFromComponent {
  title="Recative Forms Demo"

  loginform=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    pass:new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  loginUser(){
    console.log(this.loginform.status);
    console.log(this.loginform.value);
    console.log(this.loginform.valid);
    }
}
