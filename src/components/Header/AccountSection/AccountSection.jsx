import { useSelector } from 'react-redux';
import { authSelectors } from '../../../redux/auth';

import {
  Wrapper,
  Title,
  LogoutButton,
  IconWrap,
  LogoutText,
} from './AccountSection.style';
import { ReactComponent as LogoutIcon } from '../../../images/logoutIcon.svg';

export const AccountSection = ({ onModal }) => {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <Wrapper>
      <Title>{userName}</Title>
      <LogoutButton onClick={onModal}>
        <IconWrap>
          <LogoutIcon />
        </IconWrap>
        <LogoutText>Exit</LogoutText>
      </LogoutButton>
    </Wrapper>
  );
};
