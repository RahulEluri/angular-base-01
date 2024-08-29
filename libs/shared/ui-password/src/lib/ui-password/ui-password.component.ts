import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PasswordConfig {
  type?: string;
}

@Component({
  selector: 'mars-ui-password',
  templateUrl: './ui-password.component.html',
  styleUrl: './ui-password.component.css',
})
export class UiPasswordComponent implements OnInit {
  @Input() config!: PasswordConfig;
  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    console.log('Form initialized:', this.passwordForm);
  }

  onSubmit() {
    console.log('Password:', this.passwordForm.value.password);
  }
}
