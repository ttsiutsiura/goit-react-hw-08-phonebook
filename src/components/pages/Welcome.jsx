import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <>
      <p>
        Hi there, this application will help you conveniently store your contact
        numbers. Authentication required to use.
      </p>
      <ul>
        <li>
          <Link to={'/login'}>Sign in</Link>
        </li>
        <li>
          <Link to={'/register'}>Sign up</Link>
        </li>
      </ul>
    </>
  );
}
