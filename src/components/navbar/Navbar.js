import React, { useState } from 'react';
import logo from './logo-dana.jpg'

const Navbar = () => {
    const [isActiveNavbar, setIsActiveNavbar] = useState(false)

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src={logo} width="112" height="28"/>
                    </a>

                    <a role="button" onClick={ () => { setIsActiveNavbar(!isActiveNavbar) } }
                     className={ `navbar-burger ${isActiveNavbar ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={ `navbar-menu ${isActiveNavbar ? 'is-active' : ''}`}>
                    <div class="navbar-end">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Contact Us                            
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
