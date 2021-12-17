import React, { Component } from 'react';
import axios from 'axios';
import img from './about.png'
import { connect } from "react-redux";

class About extends Component {
    state = {
        title: '',
        desc: '',
    }

    componentDidMount() {
        axios.get(`https://swapi.py4e.com/api/films/1`)
        .then(res => {
            this.setState({
                title: res.data.title,
                desc: res.data.opening_crawl
            })
        })
        this.props.handleChangePage()
    }

    render() {
        return(
            <div class="container about section">

                <div class="columns is-align-items-center">
                    <div class="column is-half">
                        <div class="title is-4">{this.state.title}</div>   
                        <p class="subtitle">{this.state.desc}</p>   
                    </div>
                    <div class="column is-flex is-justify-content-center">
                        <img src={img} />
                    </div>
                    
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: () => dispatch({ type: 'CHANGE_PAGE_ABOUT' }),
    }
}
export default connect('', mapDispatchToProps)(About);