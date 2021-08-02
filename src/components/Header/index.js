import React from 'react';
import { Container } from './styled';
import NavBar from '../NavBar/index';
const Header = ({ display }) => {
  return (
    <Container display={display}>
      <NavBar />
    </Container>
  );
};

export default Header;
