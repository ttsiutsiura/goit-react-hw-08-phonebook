import { Wrapper, Caption } from './Layout.styled';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <Wrapper>
      <Caption>Phonebook</Caption>
      <Outlet />
    </Wrapper>
  );
}
