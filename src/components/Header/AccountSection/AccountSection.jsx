import React from 'react';

import logout from '../../../images/logoutIcon.svg';
import {
  Wrapper,
  Title,
  Logout,
  IconWrap,
  LogoutText,
} from './AccountSection.style';

export const AccountSection = ({ onModal }) => {
  // const userName = useSelector(authSelectors.getUserName)

  return (
    <Wrapper>
      <Title>{'Name'}</Title>
      <Logout>
        <IconWrap>
          <img src={logout} alt="exit button" />
        </IconWrap>
        <LogoutText onClick={onModal}>Exit</LogoutText>
      </Logout>
    </Wrapper>
  );
};
