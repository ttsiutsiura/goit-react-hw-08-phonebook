import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  
  &.active {
    color: #03b2cb;
  }
`;
