import React from 'react';
import { useSelector } from 'react-redux';
import { StyledLink } from './AppBar/appBar.styled';

function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/tasks">Contacts</StyledLink>}
    </nav>
  );
}

export default Navigation;
