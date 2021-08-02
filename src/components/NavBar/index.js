import React from 'react';
import Links from '../Links/index';
import { NavContainer } from './styled';

export default () => {
  return (
    <NavContainer>
      <Links rota='#home' name='Home' />
      <Links rota='#about' name='About' />
      <Links rota='#portifolio' name='Projects' />
      <Links rota='#contato' name='Contact' />
    </NavContainer>
  );
};
