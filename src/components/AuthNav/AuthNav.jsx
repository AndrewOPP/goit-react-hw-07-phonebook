import { StyledDivAuth } from './authBar.styled';
import { StyledLink } from 'components/AppBar/appBar.styled';

function AuthNav() {
  return (
    <StyledDivAuth>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login"> Log In</StyledLink>
    </StyledDivAuth>
  );
}

export default AuthNav;
