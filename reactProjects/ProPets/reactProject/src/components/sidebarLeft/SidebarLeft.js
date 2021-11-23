import React from 'react';
import Col from 'react-bootstrap/Col';
import NavTop from './NavTop'
import NavServices from './NavServices';
import { appSelector } from './../../redux/appReducer';
import { useSelector } from 'react-redux';

const SidebarLeft = () => {
  const auth = useSelector(appSelector).auth;

  return (
    <Col className="sidebar_left">
      <NavTop />
      {auth && <NavServices />}
    </Col>
  )
}

export default SidebarLeft;