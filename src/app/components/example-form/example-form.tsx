import { composeValidators, isRequired, isValidEmail } from 'app/services/validators/validators';
// import { FORM_ERROR } from 'final-form';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { TextInput } from './text-input';

export const ExampleForm: React.FC = () => {
  const onSubmit = async (values: any) => {
    const sleep = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms));
    await sleep(300); // Let's just pretend this is an API call somewhere

    // If you want to render a field specific error
    // return {
    //   // Return the error object with the specific key being the name and the value being the error message.
    //   username: 'Username Already Exists!'
    // };

    // If you want to render an error not tied to a specific field
    // return {
    //   // Return the error object with the [FORM_ERROR] key and the value being the error message.
    //   [FORM_ERROR]: 'Account Creation Failed'
    // };

    window.alert(JSON.stringify(values, null, 2));

    // Do any other logic after any checks for API errors, then return undefined to exit out of the submit call.
  };
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, invalid, submitFailed, submitError }) => (
        <form noValidate onSubmit={handleSubmit}>
          {submitFailed && <span>{submitError}</span>}
          <Field
            name="firstName"
            component={TextInput}
            label="First Name"
            type="text"
            validate={isRequired}
          />
          <Field
            name="lastName"
            component={TextInput}
            label="Last Name"
            type="text"
            validate={isRequired}
          />
          <Field
            name="email"
            component={TextInput}
            label="Email"
            type="email"
            validate={composeValidators(isRequired, isValidEmail)}
          />
          <Field
            name="username"
            component={TextInput}
            label="Username"
            type="text"
            validate={isRequired}
          />
          <Field
            name="password"
            component={TextInput}
            label="Password"
            type="password"
            validate={isRequired}
          />
          <button disabled={invalid} type="submit">
            Submit
          </button>
        </form>
      )}
    </Form>
  );
};
