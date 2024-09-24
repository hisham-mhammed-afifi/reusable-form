export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'date';

export interface FormField {
  name: string;
  label: string;
  type: InputType;
  options?: { key: string; value: string }[]; // For select, radio
  placeholder?: string;
  validators?: any[]; // Validators like Validators.required, Validators.minLength, etc.
}
