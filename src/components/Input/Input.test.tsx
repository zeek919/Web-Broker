import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Input from './Input';
import icon from '../../assets/email_icon.png';
import { render, fireEvent } from '@testing-library/react';
import { InputProps } from './Input';

describe('InputField', () => {
  const onChange = jest.fn();
  const props: InputProps = {
    name: 'name',
    type: 'text',
    placeholder: 'asd',
    icon: icon,
    onChange: onChange,
  };

  it('Should invoke onChangeHandler', () => {
    const { getByTestId } = render(<Input {...props} />);
    const input = getByTestId('content-input');
    fireEvent.change(input, { target: { value: 'testValue' } });
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it('Icon renders when added in props', () => {
    const { getByTestId } = render(<Input {...props} />);
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('Icon not renders when icon props is empty', () => {
    const { queryByLabelText } = render(<Input {...props} icon={''} />);
    expect(queryByLabelText('icon')).toBeNull();
  });

  it('Input should be disabled', () => {
    const { getByTestId } = render(<Input {...props} disabled={true} />);
    const input = getByTestId('content-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'testValue' } });
    expect(input.value).toBe('');
  });
});
