import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

import {
  Wrapper,
  Title,
  Logout,
  IconWrap,
  LogoutText,
} from './AccountSection.style';
import logout from '../../../images/logoutIcon.svg';

export const AccountSection = ({ onModal }) => {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <Wrapper>
      <Title>{userName}</Title>
      <Logout onClick={onModal}>
        <IconWrap>
          <img src={logout} alt="exit button" />
        </IconWrap>
        <LogoutText>Exit</LogoutText>
      </Logout>
    </Wrapper>
  );
};
