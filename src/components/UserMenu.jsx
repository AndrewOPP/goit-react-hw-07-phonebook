import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

function UserMenu() {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <NavLink to="/register">{name}</NavLink>
      <NavLink to="/login" onClick={handlerClick}>
        {' '}
        Log Out
      </NavLink>
    </div>
  );
}

export default UserMenu;
