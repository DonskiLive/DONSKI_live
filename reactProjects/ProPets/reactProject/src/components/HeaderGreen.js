import React from 'react';
import logo from './../images/logo-white.svg';
import {Nav, Navbar} from "react-bootstrap";


const HeaderGreen = () => {
    return (
        <header className="jumbotron-fluid nav-wrapper py-0">
            <div className="container-xl ">

                <Navbar collapseOnSelect expand="sm" variant="dark" className='py-2'>
                    <Navbar.Brand href="/" className='mt-2'>
                        <img src={logo} alt="ProPets logo"/>
                    </Navbar.Brand>

                    <Navbar.Toggle className='start-burger pr-4 pl-0' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav.Link href = '/login' className='sign-in-button ms-auto'>Sign in</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default HeaderGreen;