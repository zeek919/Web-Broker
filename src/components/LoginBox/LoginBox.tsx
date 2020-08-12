import React, { FunctionComponent } from 'react';
import Input from '../Input/Input';
import { Wrapper, TextWrapper, Header, Note } from './StyledComponents';
import email from '../../assets/email_icon.png';
import password from '../../assets/password_icon.png';

const LoginBox: FunctionComponent = () => (
    <Wrapper>
        <TextWrapper>
            <Header>Log in</Header>
            <Note>Don’t have an account? Sign up</Note>
        </TextWrapper>
        <Input name="email" type="text" placeholder="E-mail" icon={email} onChange={() => 'asd'} />
        <Input
            name="password"
            type="password"
            placeholder="Password"
            icon={password}
            onChange={() => 'asd'}
        />
    </Wrapper>
);

export default LoginBox;
