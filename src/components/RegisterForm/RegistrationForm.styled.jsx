import styled from 'styled-components';

export const MainContainer = styled.div`
  overflow: scroll;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Div = styled.div`
  @media screen and (min-width: 320px) {
    width: 320px;
    padding-top: 32px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 36px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    height: 616px;
    padding-top: 40px;
    bottom: 100px;
    right: 50%;
    transform: translate(50%);
    width: 540px;
    border-radius: 50px;
    padding-bottom: 50px;
    margin: 1px auto;
    top: 360px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
  @media screen and (min-width: 1280px) {
    position: static;
    transform: translate(0%);

    // bottom: 50%;
    // right: 85px;
    // transform: translateY(50%);
    // margin: 0;
  }

  background-color: white;
`;

export const InputForm = styled.div`
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 50px 20px 65px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-left: 16px;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;
  // line-height: 45px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImagineBox = styled.div`
display: none;
@media (min-width: 768px) {
  margin: 60px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 250px;
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    justify-content: start;
    padding: 150px 65px;
   }


`;
export const Img = styled.img`
  height: 250px;
  @media screen and (min-width: 1280px) {
    height: 450px;
  }
`;
export const H = styled.h2`
  margin-left: 40px;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  @media screen and (min-width: 1280px) {
    margin-top: 31px;
  }
`;
