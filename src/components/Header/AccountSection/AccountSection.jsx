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
      <Logout onClick={onModal}>
        <IconWrap>
          <img src={logout} alt="exit button" />
        </IconWrap>
        <LogoutText>Exit</LogoutText>
      </Logout>
    </Wrapper>
  );
};
