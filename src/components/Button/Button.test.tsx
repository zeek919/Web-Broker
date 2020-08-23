import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('Button onClick work correctly', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Button type="button" onClick={onClick} />);
    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
