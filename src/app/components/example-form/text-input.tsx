import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface TextInputProps extends FieldRenderProps<string, HTMLInputElement> {
  /**
   * The type of the input to be used for the type attribute
   */
  type?: string;
  /**
   * The label text to be shown for the input
   */
  label?: string;
  /**
   * If you would like an ID to be assigned to the input
   */
  id?: string;
  /**
   * Is the input required to for form submission
   */
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ label, input, type, required, meta }) => {
  const { name } = input;
  const { invalid, error, touched, submitError, submitFailed } = meta;
  const hasLocalError = !!invalid && !!touched;
  const hasServerError = submitFailed && !!submitError;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} required={required} {...input} />
      {hasLocalError && <span style={{ color: 'red' }}>{error}</span>}
      {hasServerError && <span style={{ color: 'red' }}>{submitError}</span>}
    </div>
  );
};
