import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
        return (
            <React.Fragment>
                <div class="footer-section">
                    <div class="container section">
                        <div class="columns">
                            <div class="column is-flex is-flex-direction-column __social-media" style={{ gap: '10px' }}>
                                <div>Follow Us:</div>
                                <div class="is-flex is-align-items-center gap-1rem">
                                    <a href="https://www.facebook.com/danawallet/"><ion-icon name="logo-facebook" size='large'></ion-icon></a>
                                    <a href='https://www.instagram.com/dana.id/'><ion-icon name="logo-instagram" size='large'></ion-icon></a>
                                    <a href='https://twitter.com/danawallet/'><ion-icon name="logo-twitter" size='large'></ion-icon></a>
                                </div>
                            </div>
                            <div class="column column is-flex-direction-column is-flex is-align-items-flex-end __contact">
                                <div class="is-flex gap-1rem">
                                    <Link class="navbar-item" to="/about">About</Link>
                                    <Link class="navbar-item" to="/contact-us">Contact Us</Link>
                                </div>
                                <div class="is-flex __copyright text-right">
                                    &copy; 2017 DANA - PT. Espay Debit Indonesia Koe. All Rights Reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default Footer
