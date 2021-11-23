import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { userSelector } from '../../redux/userReducer';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAction } from './../../redux/userReducer'

const NavCreateProfile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction(localStorage.getItem('LOCAL_ID')));
  }, [dispatch]);


  const user = useSelector(userSelector);

  useEffect(() => {
    function handleResize() { setWidth(window.innerWidth) }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  return (
    <Nav className="nav_profile flex-column">
      <div className="divider" />
      <Nav.Item>
        <NavLink className="nav-link d-flex align-items-center" aria-current="page" to="/main/profile">
          {user.avatar ? <div className='_avatar pet_avatar'>
            <img src={user.avatar} alt='user' />
          </div>
            : <FaUserCircle className='display-4' />}
          <h5 className="m-2">{user.name}</h5>
        </NavLink>
      </Nav.Item>
      <div className="divider" />
    </Nav>
  )
}

export default NavCreateProfile;