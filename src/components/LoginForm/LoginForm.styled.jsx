import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin: 60px auto 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: start;
    padding: 120px 65px;
  }
`;

export const Img = styled.img`
  width: 260px;
  height: 250px;
  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 420px;
  }
`;
export const Title = styled.h2`
  margin-left: 20px;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (min-width: 1280px) {
    margin-top: 31px;
  }
`;

export const FormBackgraund = styled.div`
  @media screen and (min-width: 1280px) {
    position: relative;
    top: 0;
    right: 0;
    width: 55%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const FormWrapper = styled.div`
  height: 100vh;
  background-color: var(--primary-text);

  margin: 0 auto;
  padding-top: 110px;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  min-height: 568px;

  @media screen and (min-width: 768px) {
    padding: 40px 65px;
    width: 533px;
    height: auto;
    min-height: 468px;
    border-radius: 20px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  @media screen and (min-width: 320px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoTitle = styled.h2`
  margin: 0;
  margin-left: 16px;
  font-size: 30px;
  font-weight: 700;
  font-family: Poppins;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const InputForm = styled.div`
  position: relative;
  max-width: 300px;
  margin: 60px auto 0;

  @media (min-width: 768px) {
    max-width: 410px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PasswordEye = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;

  :hover,
  :focus {
    cursor: pointer;
  }
`;

// export const Div = styled.div`
//   @media screen and (min-width: 320px) {
//     width: 320px;
//     padding-top: 50px;
//     padding-bottom: 110px;
//     margin: 0 auto;
//   }
//   @media screen and (min-width: 760px) {
//     //position: absolute;
//     bottom: 100px;
//     right: 50%;
//     transform: translate(50%);
//     width: 540px;
//     border-radius: 50px;
//     padding-bottom: 50px;
//     margin: auto;
//     box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
//   }
//   @media screen and (min-width: 1200px) {
//     bottom: 50%;
//     right: 85px;
//     transform: translateY(50%);
//     margin: 0;
//   }

//   background-color: white;
// `;

// export const InputForm = styled.div`
//   //position: relative;
//   padding-bottom: 20px;
//   @media screen and (min-width: 760px) {
//     padding: 40px 50px 20px 65px;
//   }
// `;

// export const ButtonDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;
// `;

// export const PasswordEye = styled.div`
//   position: absolute;
//   /* top: 62%;
//   right: 9%; */
//   top: 5px;
//   right: 1%;

//   :hover,
//   :focus {
//     cursor: pointer;
//   }
// `;
