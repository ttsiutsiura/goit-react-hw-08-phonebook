import { Appbar } from 'components/AppBar/AppBar';
import { Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Layout() {
  return (
    <Wrapper>
      <Appbar />
      <Outlet />
      <ToastContainer style={{ fontSize: 20 }} />
    </Wrapper>
  );
}
