import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import BlogPost from '../components/blogpost/BlogPost';
import Footer from '../components/footer/Footer';
import axios from 'axios';

class Home extends Component {
    state = {
        postRecords: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
            this.setState({
                postRecords: res.data
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Carousel></Carousel>
                <BlogPost postRecords={this.state.postRecords}></BlogPost>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Home
