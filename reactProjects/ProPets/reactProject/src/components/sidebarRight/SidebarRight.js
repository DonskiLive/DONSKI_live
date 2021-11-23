import React from 'react';
import Col from 'react-bootstrap/Col';
import NavCreateProfile from './NavCreateProfile';
import NavLogout from './NavLogout';
import { appSelector, initApp } from './../../redux/appReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


const SidebarRight = () => {
  const auth = useSelector(appSelector).auth;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initApp())
  }, [dispatch])

  return (
    <Col className="sidebar_right">
      {auth && <>
        <NavCreateProfile />
        <NavLogout />
      </>}
      
    </Col>
  )
}

export default SidebarRight;