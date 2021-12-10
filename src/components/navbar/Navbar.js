import React from 'react';
import logo from './logo-dana.jpg'

const Navbar = () => {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src={logo} width="112" height="28"/>
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
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
