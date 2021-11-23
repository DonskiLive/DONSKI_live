import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaPaw, FaSearch } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { appSelector, initApp } from './../../redux/appReducer';
import { useSelector, useDispatch } from 'react-redux';


const NavTop = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const auth = useSelector(appSelector).auth;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp())
  }, [dispatch])

  return (
    <Nav className="nav_top flex-column">
      {auth && <Nav.Item>
        <NavLink className="nav-link" aria-current="page" exact to="/main">
          <span><FaHome /></span>
          {width >= 1000 && 'Home'}
        </NavLink>
        <div className="back_active"></div>
      </Nav.Item>}

      <Nav.Item>
        <NavLink className="nav-link" aria-current="page" to="/main/losts">
          <span><FaSearch /></span>
          {width >= 1000 && 'Lost'}
        </NavLink>
        <div className="back_active"></div>
      </Nav.Item>

      <Nav.Item>
        <NavLink className="nav-link" to="/main/founds">
          <span><FaPaw /></span>
          {width >= 1000 && 'Found'}
        </NavLink>
        <div className="back_active"></div>
      </Nav.Item>
    </Nav>
  )
}

export default NavTop;