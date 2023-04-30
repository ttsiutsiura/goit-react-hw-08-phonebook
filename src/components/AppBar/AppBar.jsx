import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function Appbar() {
  const location = useLocation();

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
          <NavLink
            style={{ marginRight: 20 }}
            to={'/'}
            state={{ from: location }}
          >
            Home
          </NavLink>
          <NavLink to={'/contacts'} state={{ from: location }}>
            Contacts
          </NavLink>
        </nav>
        <ul style={{ display: 'flex', gap: 12 }}>
          <p>Welcome, Kirill</p>
          <button type="button">Log out</button>
        </ul>
        <ul>
          <NavLink
            style={{ marginRight: 20 }}
            to={'/register'}
            state={{ from: location }}
          >
            Register
          </NavLink>
          <NavLink to={'/login'} state={{ from: location }}>
            Log In
          </NavLink>
        </ul>
      </header>
    </>
  );
}
