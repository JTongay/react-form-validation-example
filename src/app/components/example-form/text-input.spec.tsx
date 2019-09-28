import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';
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

  xit('should change the inputs value when a value is typed', () => {
    const comp = render(<TextInput {...mockInputProps} />);
    fireEvent.change(comp.baseElement, { target: { value: 'howdy' } });
    console.log(comp.queryByLabelText('test'));
    expect(comp.queryByLabelText('test')).toBeDefined();
  });
});
