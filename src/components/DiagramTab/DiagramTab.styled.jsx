import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 1px;
  @media screen and (min-width: 768px) {
    display: flex;
    padding-bottom: 0;
  }
`;

export const CategorySection = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 8px;
  color: var(--common-text);

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const BtnWrapper = styled.div`
  position: relative;

  &:hover,
  &:focus {
    fill: var(--blue);
  }

  & img {
    position: absolute;
    top: 38%;
    right: 21px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: fill 500ms ease;
    pointer-events: none;
    z-index: -1;

    @media screen and (min-width: 768px) {
      top: 49%;
    }
  }
`;

export const selectStyles = {
  control: styles => ({
    ...styles,
    fontFamily: 'Circe',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '1.5',
    color: '#BDBDBD',
    outline: 'none',
    border: '1px solid var(--common-text)',
    borderRadius: '30px',
    borderBottom: '1px solid #E0E0E0',
    cursor: 'pointer',
    appearance: 'none',
    marginBottom: '20px',
    padding: '12px 21px 14px 20px',
    width: '100%',

    '@media only screen and (min-width: 768px)': {
      width: '160px',
      marginBottom: 0,
    },
    '@media only screen and (min-width: 1280px)': {
      width: '181px',
    },
  }),
  options: (styles, state) => ({
    ...styles,
    fontFamily: 'Circe',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '1.5',
    height: '44px',
    cursor: 'pointer',
    color: state.isSelected ? '#FF6596' : 'black',

    '&:hover': {
      backgroundColor: 'white',
      color: '#FF6596',
    },
  }),
  menu: (base, state) => ({
    ...base,
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    //backdropFilter:' blur(50px)',
    borderRadius: '20px',
  }),

  menuList: (base, state) => ({
    ...base,
    cursor: 'pointer',
  }),
};
