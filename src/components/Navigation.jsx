import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}
    </nav>
  );
}

export default Navigation;
