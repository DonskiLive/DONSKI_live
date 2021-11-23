import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { appLogout } from './../../redux/appReducer';
import { logout } from './../../service/authService';


const NavLogout = () => {
  const dispatch = useDispatch();
  return (
    <Nav className="nav_logout flex-column">
      <Nav.Item>
        <NavLink
          className="nav-link"
          exact to="/"
          onClick={() => {
            logout();
            dispatch(appLogout());
          }}
        >
          <span><FaSignOutAlt /></span>{'Logout'}
        </NavLink>
      </Nav.Item>
    </Nav>
  )
}

export default NavLogout;