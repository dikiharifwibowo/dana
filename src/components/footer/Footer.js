import React from 'react';

const Footer = () => {
        return (
            <React.Fragment>
                <div class="footer-section">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-flex is-flex-direction-column" style={{ gap: '5px;' }}>
                                <div>Follow Us</div>
                                <div class="is-flex is-align-items-center gap-1rem">
                                    <ion-icon name="logo-facebook" size='large'></ion-icon>
                                    <ion-icon name="logo-instagram" size='large'></ion-icon>
                                    <ion-icon name="logo-twitter" size='large'></ion-icon>
                                </div>
                            </div>
                            <div class="column column is-flex-direction-column is-flex is-align-items-flex-end">
                                <div class="is-flex gap-1rem">
                                    <a>About</a>
                                    <a>Contact Us </a>
                                </div>
                                <div class="is-flex">
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
