import React, { FunctionComponent, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Wrapper, ContentWrapper, SvgWrapper } from './StyledComponents';
import LoginBox from '../LoginBox/LoginBox';
import { ReactComponent as LoginWindow } from '../../assets/LoginWindow.svg';
import { ReactComponent as Strings } from '../../assets/Strings.svg';
import { ReactComponent as Bubbles } from '../../assets/Bubbles.svg';
import { loginAnimation } from '../../animations/loginAnimation';

const Login: FunctionComponent = () => {
  const strings = useRef(document.createElement('div'));
  const bubbles = useRef(document.createElement('div'));
  const main = useRef(document.createElement('div'));

  useEffect(() => {
    loginAnimation(strings, bubbles, main);
  });
  return (
    <Wrapper>
      <ContentWrapper>
        <SvgWrapper ref={strings}>
          <Strings />
        </SvgWrapper>
        <LoginBox />
        <SvgWrapper ref={bubbles}>
          <Bubbles />
        </SvgWrapper>
      </ContentWrapper>
      <SvgWrapper ref={main}>
        <LoginWindow />
      </SvgWrapper>
    </Wrapper>
  );
};

export default Login;
