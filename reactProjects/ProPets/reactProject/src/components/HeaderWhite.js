import React from 'react';
import logo from './../images/logo-green.svg';
import {Row, Container, Col} from "react-bootstrap";
import {NavLink, useLocation} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { appSelector } from './../redux/appReducer';


const HeaderWhite = () => {
  const auth = useSelector(appSelector).auth;
  const location = useLocation();

    return (
        <div className="topbar topbar_white">
        <Container>
          <Row className = "justify-content-between">
            <Col>{
            !auth ?<NavLink to = '/'><img className="topbar_logo" src={logo} alt="logo" /></NavLink>
              :
              <img className="topbar_logo" src={logo} alt="logo" />
              }</Col>
            <Col className ="d-flex">
            {auth && (location.pathname ==='/main' || location.pathname ==='/main/' ) ? <NavLink to="/main/add-post" className="btn signin_btn ms-auto">add new</NavLink> :''}
            {auth && (location.pathname ==='/main/losts' || location.pathname === '/main/founds') 
            ? 
            <div className ="ms-auto">
            <NavLink to="/main/losts/add-lost" className="btn signin_btn mr-3">add lost</NavLink>
            <NavLink to="/main" className="btn signin_btn">add found</NavLink> 
            </div>
            : ''}
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default HeaderWhite;