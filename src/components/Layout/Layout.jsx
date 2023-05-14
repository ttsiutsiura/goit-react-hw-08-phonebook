import { Appbar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Wrapper>
      {/* <Caption>Phonebook</Caption> */}
      <Appbar />
      <Outlet />
    </Wrapper>
  );
}
