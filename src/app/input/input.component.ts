import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormField } from '../models/form-field.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() field!: FormField;
  @Input() form!: FormGroup;

  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.form.controls[this.field.name].setValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.controls[this.field.name].disable();
    } else {
      this.form.controls[this.field.name].enable();
    }
  }

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }

  get control() {
    return this.form.controls[this.field.name];
  }
}
