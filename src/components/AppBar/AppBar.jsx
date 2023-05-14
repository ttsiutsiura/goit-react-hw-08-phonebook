import { useAuth } from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavItem } from './AppBar.styled';
import { Button } from 'components/ContactForm/Form.styled';
import { selectUserEmail } from 'redux/auth/selectors';

export function Appbar() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const email = useSelector(selectUserEmail);

  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
      >
        <nav>
          <NavItem style={{ marginRight: 20 }} to={'/'}>
            Home
          </NavItem>
          {isLoggedIn && (
            <NavItem to={'/contacts'}>Contacts</NavItem>
          )}
        </nav>
        {isLoggedIn && (
          <ul style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <p style={{ fontSize: 18 }}>{email}</p>
            <Button type="button" onClick={() => dispatch(logOut())}>
              Log out
            </Button>
          </ul>
        )}

        {!isLoggedIn && (
          <ul>
            <NavItem style={{ marginRight: 20 }} to={'/register'}>
              Register
            </NavItem>
            <NavItem to={'/login'}>Log In</NavItem>
          </ul>
        )}
      </header>
    </>
  );
}
