import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import icon from '../../assets/email_icon.png';
import Button from './Button';

describe('Button', () => {
  it('Button onClick work correctly', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button type={'button'} onClick={onClick} />
    );

    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Button is disabled when prop is true', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button type={'button'} onClick={onClick} disabled={true} />
    );
    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('Icon render when added to props', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button type={'button'} onClick={onClick} icon={icon} />
    );
    expect(getByTestId('icon')).toBeTruthy();
  });

  it('Icon doesnt render when prop is null', () => {
    const onClick = jest.fn();
    const { queryByTestId } = render(
      <Button type={'button'} onClick={onClick} />
    );
    expect(queryByTestId('icon')).toBeNull();
  });
});
