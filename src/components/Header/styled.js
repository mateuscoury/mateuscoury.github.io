import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  background-color: ${({ display }) => (display ? 'gray' : 'transparent')};
  transition: all ease 0.3s;
`;
