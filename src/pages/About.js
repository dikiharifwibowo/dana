import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {

    render() {
        return(
            <div class="container about section">

                <div class="columns">
                    <div class="column is-half">
                        <p class="title is-4">Lorem Ipsum</p>   
                        <p class="subtitle">Lorem Ipsum dasdasdasd</p>   
                    </div>
                    <div class="column">img</div>
                    
                </div>

                <div class="columns">
                    <div class='column title is-justify-content-center is-flex'>Lorem Ipsum</div>
                </div> 

                <div class="columns">
                    <div class="column title gap-1rem is-align-items-center is-flex-direction-column is-flex">
                       <ion-icon name="navigate-outline" size="large"></ion-icon>
                       <p class="title is-5">Lorem ipsum</p>
                       <p class="subtitle is-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu enim. 
                       Nunc sagittis tellus orci, vel aliquam sapien interdum elementum. Donec dictum ac dui ac luctus</p> 
                    </div>
                    <div class="column title gap-1rem is-align-items-center is-flex-direction-column is-flex">
                       <ion-icon name="navigate-outline" size="large"></ion-icon>
                       <p class="title is-5">Lorem ipsum</p>
                       <p class="subtitle is-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu enim. 
                       Nunc sagittis tellus orci, vel aliquam sapien interdum elementum. Donec dictum ac dui ac luctus</p> 
                    </div>
                    <div class="column title gap-1rem is-align-items-center is-flex-direction-column is-flex">
                       <ion-icon name="navigate-outline" size="large"></ion-icon>
                       <p class="title is-5">Lorem ipsum</p>
                       <p class="subtitle is-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu enim. 
                       Nunc sagittis tellus orci, vel aliquam sapien interdum elementum. Donec dictum ac dui ac luctus</p> 
                    </div>
                    <div class="column title gap-1rem is-align-items-center is-flex-direction-column is-flex">
                       <ion-icon name="navigate-outline" size="large"></ion-icon>
                       <p class="title is-5">Lorem ipsum</p>
                       <p class="subtitle is-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu enim. 
                       Nunc sagittis tellus orci, vel aliquam sapien interdum elementum. Donec dictum ac dui ac luctus</p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default About