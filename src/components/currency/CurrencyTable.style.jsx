import styled from 'styled-components'

const CurrencyLayout = styled.div`
  width: 280px;
  height: 175px;
  overflow: hidden;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.2) -7.46%, rgba(255, 255, 255, 0) 100%),
    url(images/icons/currency/wave.svg) bottom left  no-repeat,
    var(--blue);
  border-radius: 30px;

    @media (min-width: 768px) {
      width: 336px;
      height: 182px;   
    };

    @media (min-width: 1280px) {
      width: 393px;
      height: 347px;
    };
`

export default CurrencyLayout
