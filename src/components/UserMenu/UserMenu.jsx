import { StyledButton, StyledP } from 'components/AppBar/appBar.styled';
import { StyledDivAuth } from 'components/AuthNav/authBar.styled';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/operations';

function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  return (
    <StyledDivAuth>
      <StyledP to="/register">Welcome, {name}</StyledP>
      <StyledButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledButton>
    </StyledDivAuth>
  );
}

export default UserMenu;
