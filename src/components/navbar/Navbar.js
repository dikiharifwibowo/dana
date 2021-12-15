import React, { useState } from 'react';
import logo from './logo-dana.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActiveNavbar, setIsActiveNavbar] = useState(false)

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/dana">
                        <img src={logo} width="112" height="28"/>
                    </Link>

                    <a role="button" onClick={ () => { setIsActiveNavbar(!isActiveNavbar) } }
                     className={ `navbar-burger ${isActiveNavbar ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={ `navbar-menu ${isActiveNavbar ? 'is-active' : ''}`}>
                    <div class="navbar-end">
                        <Link class="navbar-item" onClick={ () => { setIsActiveNavbar(false) } } to="/about">About</Link>
                        <Link class="navbar-item" onClick={ () => { setIsActiveNavbar(false) } } to="/contact-us">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
