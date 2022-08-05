import home from '../../images/homeIcon.svg';
import currency from '../../images/currencyIcon.svg';
import statistics from '../../images/statisticsIcon.svg';
import { Wrapper, StyledLink, CurrencyLink, NavText } from './Navigation.style';

const navConfig = [
  { icon: home, title: 'home', link: '/home' },
  { icon: statistics, title: 'statistics', link: '/diagram' },
];

export const Navigation = () => (
  <Wrapper>
    {navConfig.map(({ icon, title, link }, index) => (
      <StyledLink
        key={icon + index}
        to={link}
        className={isActive => (isActive ? 'activeLink' : '')}
      >
        <img src={icon} alt="home link" />
        <NavText>{title}</NavText>
      </StyledLink>
    ))}
    <CurrencyLink
      to={'*'}
      className={isActive => (isActive ? 'activeLink' : '')}
    >
      <img src={currency} alt="currency link" />
    </CurrencyLink>
  </Wrapper>
);
