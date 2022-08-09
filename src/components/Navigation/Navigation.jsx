import { useDispatch } from 'react-redux';

import { setOpen, setClose } from '../../redux/currency/currency-reducer';
import useMediaQuery from '../../hooks/useMediaQuery';
import { navConfig } from '../../utils/navConfig';

import { Wrapper, StyledLink, NavText } from './Navigation.style';
import currency from '../../assets/images/currencyIcon.svg';

export const Navigation = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Wrapper>
      {navConfig.map(({ icon, title, link }, index) => (
        <StyledLink
          key={icon + index}
          to={link}
          onClick={() => dispatch(setClose())}
        >
          <img src={icon} alt="home link" />
          <NavText>{title}</NavText>
        </StyledLink>
      ))}
      {isMobile && (
        <StyledLink to={'/#'} onClick={() => dispatch(setOpen())}>
          <img src={currency} alt="currency link" />
        </StyledLink>
      )}
    </Wrapper>
  );
};
