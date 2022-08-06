import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';
import logout from '../../../images/logoutIcon.svg';
import {
  Wrapper,
  Title,
  Logout,
  IconWrap,
  LogoutText,
} from './AccountSection.style';

export const AccountSection = ({ onModal }) => {
  const userName = useSelector(authSelectors.getUserName);
  const [name, setName] = useState('');

  useEffect(() => {
    if (userName) {
      setName(userName);
    }
  }, [userName]);

  return (
    <Wrapper>
      <Title>{name}</Title>
      <Logout onClick={onModal}>
        <IconWrap>
          <img src={logout} alt="exit button" />
        </IconWrap>
        <LogoutText>Exit</LogoutText>
      </Logout>
    </Wrapper>
  );
};
