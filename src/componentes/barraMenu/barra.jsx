import React, { useState, useEffect } from 'react';
import { NavbarWrapper, Menu, MenuItem } from './baraStyled';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper isSticky={isSticky}>
      <Menu>
        <MenuItem>Local</MenuItem>
         <MenuItem>Sobre</MenuItem>
        <MenuItem>Serviços</MenuItem>
         <button><a href="">Entrar em contato</a></button>
      </Menu>
    </NavbarWrapper>
  );
}

export default Navbar;
