import React, { Component } from 'react';
import Carousel from '../components/carousel/Carousel';
import BlogPost from '../components/blogpost/BlogPost';
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
                <Carousel></Carousel>
                <BlogPost postRecords={this.state.postRecords}></BlogPost>
            </React.Fragment>
        )
    }
}

export default Home
