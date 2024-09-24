import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormField } from '../models/form-field.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() fields: FormField[] = [];
  @Output() submitForm = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createControl();
  }

  createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach((field) => {
      const control = this.fb.control(
        field.type === 'checkbox' ? false : '',
        field.validators ? field.validators : []
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  // Trigger validation for all form fields
  validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}
