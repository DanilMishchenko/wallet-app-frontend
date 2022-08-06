import { useDispatch } from 'react-redux';

import home from '../../images/homeIcon.svg';
import currency from '../../images/currencyIcon.svg';
import statistics from '../../images/statisticsIcon.svg';
import { Wrapper, StyledLink, NavText } from './Navigation.style';
import useMediaQuery from '../../hooks/useMediaQuery';
import { setOpen, setClose } from '../../redux/currency/currency-reducer';

const navConfig = [
  { icon: home, title: 'home', link: '/home' },
  { icon: statistics, title: 'statistics', link: '/diagram' },
];

export const Navigation = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Wrapper>
      {navConfig.map(({ icon, title, link }, index) => (
        <StyledLink
          key={icon + index}
          to={link}
          className={isActive => (isActive ? 'activeLink' : '')}
          onClick={() => dispatch(setClose())}
        >
          <img src={icon} alt="home link" />
          <NavText>{title}</NavText>
        </StyledLink>
      ))}
      {isMobile && (
        <StyledLink
          to={'#'}
          className={isActive => (isActive ? 'activeLink' : '')}
          onClick={() => dispatch(setOpen())}
        >
          <img src={currency} alt="currency link" />
        </StyledLink>
      )}
    </Wrapper>
  );
};
