import React, { FunctionComponent } from 'react';
import ButtonWrapper from './StyledComponents';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  content?: string;
  disabled?: boolean;
  onClick?: (...args: any) => void;
  width?: number;
  height?: number;
  background?: string;
  firstGradientColor?: string;
  secondGradientColor?: string;
  shadowColor?: string;
  radius?: number;
  icon?: string;
  color?: string;
  border?: boolean;
  stat?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  type,
  content,
  disabled,
  onClick,
  width,
  height,
  firstGradientColor,
  secondGradientColor,
  shadowColor,
  radius,
  icon,
  color,
  border,
  stat,
}) => {
  return (
    <ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      firstGradientColor={firstGradientColor}
      secondGradientColor={secondGradientColor}
      shadowColor={shadowColor}
      radius={radius}
      color={color}
      border={border}
      data-testid="button"
      stat={stat}
    >
      {icon ? <img src={icon} alt={'icon'} data-testid="icon" /> : null}
      {content}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  type: 'button',
  content: '',
  disabled: false,
  width: 8,
  height: 3,
  firstGradientColor: '#ffffff',
  secondGradientColor: '#ffffff',
  shadowColor: '',
  radius: 0,
  icon: '',
  color: 'white',
  stat: false,
};

export default Button;
