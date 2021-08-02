import styled from 'styled-components';

export const Linkss = styled.li`
  margin-left: 50px;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const Pagina = styled.a`
  text-decoration: none;
  font-size: 30px;
  background-color: ${({ estado }) => (estado ? 'red' : 'transparent')};
  cursor: pointer;
  transition: all ease 0.4s;
  color: black;
  &::before {
    content: ' ';
    background-color: blue;
    width: 15px;
    height: 10px;
    position: absolute;
    margin-top: 30px;
    transition: all ease 0.3s;
  }
  &:hover {
    &::before {
      width: 150px;
    }
  }
`;
