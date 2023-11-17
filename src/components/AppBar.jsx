import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
