import React, { FunctionComponent } from 'react';
import { Wrapper, InputContainer, InputField, Label, Icon } from './StyledComponents';

export interface InputProps {
    name: string;
    type: 'password' | 'text';
    placeholder: string;
    icon?: string;
    onChange: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ name, type, placeholder, icon, onChange }) => {
    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        onChange(e.currentTarget.value);
    };

    return (
        <Wrapper>
            <InputContainer>
                {icon ? <Icon src={icon} /> : null}
                <Label htmlFor={name}>
                    <InputField
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                    />
                </Label>
            </InputContainer>
        </Wrapper>
    );
};

export default Input;
