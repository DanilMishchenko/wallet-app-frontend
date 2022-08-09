import { Wrapper, LogoLink, LogoIcon, Title } from './LogoSection.styled';
import logoApp from '../../assets/images/logoApp.svg';

export const LogoSection = () => (
  <Wrapper>
    <LogoLink to="/home">
      <LogoIcon src={logoApp} alt="logo" />
      <Title>Wallet</Title>
    </LogoLink>
  </Wrapper>
);
