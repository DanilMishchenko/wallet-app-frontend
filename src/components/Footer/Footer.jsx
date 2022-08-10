import {
  Wrapper,
  Container,
  RedHeart,
  BlueHeart,
  YellowHeart,
  Team,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <p>© 2022 | All Rights Reserved | Developed with</p>{' '}
        <RedHeart>♥</RedHeart> by <Team>4Team</Team>
      </Container>
      <Container>
        <span>Glory to Ukraine! Glory to the heroes!</span>{' '}
        <BlueHeart>♥</BlueHeart> <YellowHeart>♥</YellowHeart>
      </Container>
    </Wrapper>
  );
};
