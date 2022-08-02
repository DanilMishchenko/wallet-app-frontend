import styled from 'styled-components';

export const Div = styled.div`
  background-color: var(--primary-text);

  @media screen and (min-width: 320px) {
    margin: 0 auto;
    padding-top: 110px;
    padding-left: 20px;
    padding-right: 20px;
    width: 320px;
    height: 568px;
  }
  @media screen and (min-width: 760px) {
    padding-top: 40px;
    padding-left: 65px;
    padding-right: 58px;
    width: 533px;
    height: 468px;
    border-radius: 20px;
  }
`;

export const Logo = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 760px) {
    width: 40px;
    height: 40px;
  }
`;

export const InputForm = styled.div`
  position: relative;
  margin-top: 60px;

  @media screen and (min-width: 320px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 760px) {
    margin-bottom: 42px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PasswordEye = styled.div`
  position: absolute;
  top: 70%;
  right: 1%;

  :hover,
  :focus {
    cursor: pointer;

    @media screen and (min-width: 320px) {
    }
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
