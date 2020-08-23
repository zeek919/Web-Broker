import React, { FunctionComponent } from 'react';
import ButtonWrapper from './StyledComponents';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  content?: string;
  disabled?: boolean;
  onClick?: () => void;
  width?: number;
  height?: number;
  background?: string;
  firstGradientColor?: string;
  secondGradientColor?: string;
  shadowColor?: string;
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
      data-testid="button"
    >
      {content}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  content: '',
  disabled: false,
  width: 1,
  height: 1,
  firstGradientColor: '#ffffff',
  secondGradientColor: '#ffffff',
  shadowColor: '',
};

export default Button;
