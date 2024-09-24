import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormField } from '../models/form-field.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  formValue: any = {};
  formFields: FormField[] = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'Enter your first name',
      validators: [Validators.required, Validators.minLength(2)],
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      validators: [Validators.required, Validators.minLength(6)],
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'radio',
      options: [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
      ],
      validators: [Validators.required],
    },
    {
      name: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { key: 'usa', value: 'USA' },
        { key: 'canada', value: 'Canada' },
        { key: 'uk', value: 'UK' },
      ],
      validators: [Validators.required],
    },
    {
      name: 'terms',
      label: 'Accept Terms',
      type: 'checkbox',
      validators: [Validators.requiredTrue],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(value: any): void {
    this.formValue = value;
    console.log('Form Submitted:', value);
    // Handle form submission, e.g., send to API
  }
}
