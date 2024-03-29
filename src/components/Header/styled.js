import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  width: 100vw;
  height: 100px;
  background-color: ${({ display }) => (display ? 'gray' : 'transparent')};
  transition: all ease 0.3s;
  @media screen and (max-width: 975px) {
    & {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;
      width: 100%;
      height: 100px;
      background-color: ${({ display }) => (display ? 'gray' : 'transparent')};
      transition: all ease 0.3s;
    }
  }
`;
