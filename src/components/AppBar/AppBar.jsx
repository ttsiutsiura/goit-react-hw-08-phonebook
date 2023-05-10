import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export function Appbar() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

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
          <NavLink style={{ marginRight: 20 }} to={'/'}>
            Home
          </NavLink>
          {/* <NavLink to={'/contacts'}>Contacts</NavLink> */}
          {isLoggedIn && <NavLink to={'/contacts'}>Contacts</NavLink>}
        </nav>
        {isLoggedIn && (
          <ul style={{ display: 'flex', gap: 12 }}>
            <p>Welcome, Kirill</p>
            <button type="button" onClick={() => dispatch(logOut())}>
              Log out
            </button>
          </ul>
        )}

        {!isLoggedIn && (
          <ul>
            <NavLink style={{ marginRight: 20 }} to={'/register'}>
              Register
            </NavLink>
            <NavLink to={'/login'}>Log In</NavLink>
          </ul>
        )}
      </header>
    </>
  );
}
