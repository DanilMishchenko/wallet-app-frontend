import styled from 'styled-components'

const BlurBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

    @media (min-width: 768px) {
      min-height: 1024px;
      filter: blur(50px);  
      background:
        linear-gradient(rgba(210,210,210,0.2),rgba(255, 255, 255, 0.4)),
        url(images/ellipse_pink.png) top right no-repeat,
        url(images/ellipse_blue.png) bottom left  no-repeat;
    };

    @media (min-width: 1280px) {
      min-height: calc(100vh - 105px);
    };
`

export default BlurBackground
