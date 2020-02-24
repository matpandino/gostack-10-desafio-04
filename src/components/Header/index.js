import React from 'react';

import { Container } from './styles';

import fbLogo from '../../assets/facebook.svg';
import { FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <img src={fbLogo} alt="facebook logo"></img>
      <span>
        Meu perfil
        <FaUser color="#4a90e2" size={15} />
      </span>
    </Container>
  );
}
