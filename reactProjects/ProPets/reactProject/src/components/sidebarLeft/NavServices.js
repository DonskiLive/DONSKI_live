import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaClinicMedical, FaDog, FaHotel, FaWalking } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

const NavServices = () => {

  return (
    <Nav className="nav_services flex-column">
      <Nav.Item className="nav_title">
        {'Services'}
      </Nav.Item>

      <div className="divider"></div>

      <Nav.Item>
        <NavLink className="nav-link" aria-current="page" to="/main/hotels">
          <span><FaHotel /></span>
          {'Hotels'}
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link walking" aria-current="page" exact to="/main/walking">
          <span><FaWalking /></span>
          {'Walking'}
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" aria-current="page" exact to="/main/fostering">
          <span><FaDog /></span>
          {'Fostering'}
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" aria-current="page" exact to="/main/vethelp">
          <span><FaClinicMedical /></span>
          {'VetHelp'}
        </NavLink>
      </Nav.Item>

      <div className="divider"></div>
    </Nav>
  )
}

export default NavServices;