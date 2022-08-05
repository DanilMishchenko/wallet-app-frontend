import home from '../../images/homeIcon.svg';
import currency from '../../images/currencyIcon.svg';
import statistics from '../../images/statisticsIcon.svg';
import { Wrapper, StyledLink, NavText } from './Navigation.style';

const navConfig = [
  { icon: home, title: 'home', link: '/home' },
  { icon: statistics, title: 'statistics', link: '/diagram' },
];

export const Navigation = () => (
  <Wrapper>
    {navConfig.map(({ icon, title, link }, index) => (
      <StyledLink key={icon + index} to={link}>
        <img src={icon} alt="home link" />
        <NavText>{title}</NavText>
      </StyledLink>
    ))}
    <StyledLink onlyMobile to={'*'}>
      <img src={currency} alt="currency link" />
    </StyledLink>
  </Wrapper>
);
