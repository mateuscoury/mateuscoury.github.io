import styled from 'styled-components';

export const Linkss = styled.li`
  margin-left: 50px;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 975px) {
    & {
      margin-left: 50px;
      margin-right: 25px;
      width: 50px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }
  }
`;

export const Pagina = styled.a`
  text-decoration: none;
  font-size: 30px;
  background-color: ${({ estado }) => (estado ? 'red' : 'transparent')};
  cursor: pointer;
  transition: all ease 0.4s;
  color: black;
  @media screen and (max-width: 975px) {
    & {
      text-decoration: none;
      font-size: 25px;
      background-color: ${({ estado }) => (estado ? 'red' : 'transparent')};
      cursor: pointer;
      transition: all ease 0.4s;
      color: black;
    }
  }
  &::before {
    content: ' ';
    background-color: blue;
    width: 15px;
    height: 10px;
    position: absolute;
    margin-top: 30px;
    transition: all ease 0.3s;
    @media screen and (max-width: 975px) {
      & {
        content: ' ';
        background-color: blue;
        width: 5px;
        height: 10px;
        position: absolute;
        margin-top: 30px;
        transition: all ease 0.3s;
      }
    }
  }
  &:hover {
    &::before {
      width: 150px;
      @media screen and (max-width: 975px) {
        & {
          width: 80px;
        }
      }
    }
  }
`;
