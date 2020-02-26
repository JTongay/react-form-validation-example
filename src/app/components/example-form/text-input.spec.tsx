import * as React from 'react';
import { render } from 'react-testing-library';
import { TextInput } from './text-input';

describe('<TextInput />', () => {
  // set up the base input props needed
  const mockInputProps = {
    input: {
      name: 'test',
      onBlur: jasmine.createSpy(),
      onChange: jasmine.createSpy(),
      onFocus: jasmine.createSpy(),
      type: 'text',
      value: ''
    },
    label: 'test',
    meta: {}
  };

  it('should render', () => {
    const comp = render(<TextInput {...mockInputProps} />);
    expect(comp).toBeDefined();
  });
});
