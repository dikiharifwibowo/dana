import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class ContactUs extends Component {

    render() {
        return(
            <div class="container contact-us section">
                <div class="columns">
                    <div class="column">
                        <div class="title is-4">Contact Us</div>
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="John doe"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="John doe"/>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Message</label>
                            <div class="control">
                                <textarea class="textarea" placeholder="Textarea"></textarea>
                            </div>
                        </div>
                        <div class="field is-grouped">
                            <div class="control is-width-full">
                                <button class="button is-link is-width-full">Send</button>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="title is-4">Customer Support</div>
                        <div class="hotline is-flex is-align-items-center "><ion-icon name="chatbubbles-outline"></ion-icon> <b>1-500-445</b></div>
                        <p class="content">Contact our customer support or email us at <b>help@dana.id</b> if you need help</p>
                        <div>
                            <div class="title is-4">Social Media</div>
                            <p>Feel free to contact us at one of out social media outlets below</p>
                            <div class="column is-flex is-flex-direction-column" style={{paddingLeft: "0"}}>
                                <div class="is-flex is-align-items-center gap-1rem">
                                    <a href="https://www.facebook.com/danawallet/"><ion-icon name="logo-facebook" size='large'></ion-icon></a>
                                    <a href='https://www.instagram.com/dana.id/'><ion-icon name="logo-instagram" size='large'></ion-icon></a>
                                    <a href='https://twitter.com/danawallet/'><ion-icon name="logo-twitter" size='large'></ion-icon></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs