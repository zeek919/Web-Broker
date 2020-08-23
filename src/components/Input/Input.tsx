import React, { FunctionComponent, useState } from 'react';
import {
  Wrapper,
  InputContainer,
  InputField,
  Label,
  Icon,
} from './StyledComponents';

export interface InputProps {
  name?: string;
  type: 'password' | 'text';
  placeholder: string;
  icon?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState<string>(value as string);
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);

    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <Wrapper>
      <InputContainer>
        {icon ? <Icon src={icon} data-testid="icon" /> : null}
        <Label htmlFor={name}>
          <InputField
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChangeHandler}
            disabled={disabled}
            data-testid="content-input"
          />
        </Label>
      </InputContainer>
    </Wrapper>
  );
};

Input.defaultProps = {
  value: '',
  disabled: false,
};
export default Input;
