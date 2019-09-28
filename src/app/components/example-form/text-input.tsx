import TextField from '@material-ui/core/TextField';
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

export const TextInput: React.FC<TextInputProps> = ({ label, meta, id, input, required, type }) => {
  const hasLocalError: boolean = !!meta.invalid && !!meta.touched;
  return (
    <TextField
      error={hasLocalError}
      label={hasLocalError ? meta.error : label}
      id={id}
      type={type}
      color="primary"
      required={required}
      name={input.name}
      value={input.value}
      onChange={input.onChange}
      onBlur={input.onBlur}
      {...input}
    />
  );
};
