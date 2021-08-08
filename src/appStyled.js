import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  height: 800px;
  flex: 1;
  @media screen and (max-width: 975px) {
    & {
      width: 1000px;
    }
  }
`;
