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

export const CustomSelect = styled.select`
  display: flex;
  width: 100%;
  padding: 12px 21px 14px 20px;
  margin-bottom: 20px;
  border: 1px solid var(--common-text);
  border-radius: 30px;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: none;
  outline: none;
  appearance: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 160px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 181px;
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
