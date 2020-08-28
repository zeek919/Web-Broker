import React, { FunctionComponent } from 'react';
import Wrapper from './StyledComponents';
import facebook from '../../assets/facebook_icon.png';
import google from '../../assets/google_icon.png';
import Button from '../Button/Button';
import {
  loginUserWithGoogle,
  loginUserWithFacebook,
} from '../../store/userData/operations';
import { useDispatch } from 'react-redux';

const SocialMediaLoginBox: FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button
        width={200}
        height={40}
        type={'button'}
        icon={facebook}
        content={'Log in with Facebook'}
        border
        color={'black'}
        radius={5}
        stat
        onClick={() => dispatch(loginUserWithFacebook())}
      />
      <Button
        width={200}
        height={40}
        icon={google}
        content={'Log in with Google'}
        border
        color={'black'}
        radius={5}
        stat
        onClick={() => dispatch(loginUserWithGoogle())}
      />
    </Wrapper>
  );
};

export default SocialMediaLoginBox;
