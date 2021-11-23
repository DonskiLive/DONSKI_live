import React from 'react';
import logo from '../images/logo-white.svg';

const Footer = () => {
    return (
        <footer className="jumbotron-fluid footer-wrapper">
            <div className="container-sm footer py-3 py-md-5">
                <div className="row align-items-center justify-content-between flex-md-column flex-lg-row">
                    <a className="col-6" href="/home">
                        <img className="logo" src={logo} alt="Logo" />
                    </a>
                    <address className="col-6">
                        <p className="address text-end">1600 Amphitheatre Pkwy<br />Mountain View, CA 94043, USA</p>
                    </address>

                </div>
            </div>
        </footer>
    );
};

export default Footer;