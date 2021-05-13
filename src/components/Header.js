// import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = (props) =>{


    const[showMenu,setShowMenu]= useState(false);
    const location = useLocation()

    const menuClick = () => setShowMenu(!showMenu)
    return(
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">Saranya Dayalan</a>

           <button onClick={menuClick} className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu <FontAwesomeIcon icon={faBars} />
                <i className="fas fa-bars"></i>
            </button>
            <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className=
                        {`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${location.pathname ==='/portfolio'?'active':''}`}href="/portfolio">Portfolio </a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className=
                        {`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${location.pathname === '/about'?'active': ''}`} href="/about">About </a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className=
                        {`nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;
