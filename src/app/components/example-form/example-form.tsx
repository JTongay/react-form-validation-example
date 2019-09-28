import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Field, FormRenderProps } from 'react-final-form';
import {
  composeValidators,
  isRequired,
  verifyMinLength
} from '../../services/validators/validators';
import { TextInput } from './text-input';

export const ExampleForm: React.FC<FormRenderProps> = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <Field
          required
          label="First Name"
          name="firstName"
          component={TextInput}
          type="text"
          validate={composeValidators(isRequired, verifyMinLength(2, 'first name'))}
        />
      </div>
      <div>
        <Field
          required
          label="Last Name"
          name="lastName"
          component={TextInput}
          type="text"
          validate={composeValidators(isRequired, verifyMinLength(2, 'last name'))}
        />
      </div>
      <br />
      <Button variant="contained" color="primary" type="submit" disabled={submitting}>
        Submit
      </Button>
    </form>
  );
};
