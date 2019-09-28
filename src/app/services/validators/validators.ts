export const composeValidators = (...validators: any[]) => (value: string) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export function isRequired(value: string): string | undefined {
  return value ? undefined : 'Required';
}

export function verifyMinLength(length: number, input: string) {
  return (value: string): string | undefined => {
    return value.length > length ? undefined : `${input} must be greater than length ${length}`;
  };
}
