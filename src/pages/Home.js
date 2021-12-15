import React, { Component } from 'react';
import Carousel from '../components/carousel/Carousel';
import BlogPost from '../components/blogpost/BlogPost';
import axios from 'axios';

class Home extends Component {
    state = {
        postRecords: [],
        staticRandom: '',
        imageRandom: '',
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
            this.setState({
                postRecords: res.data
            })
        })
        axios.get(`https://api.chucknorris.io/jokes/random`)
        .then(res => {
            this.setState({
                staticRandom: res.data.value
            })
        })
        fetch(`https://source.unsplash.com/random`).then((res) => {
            this.setState({
                imageRandom: res.url
            })
        }) 
    }

    render() {
        return (
            <React.Fragment>
                <Carousel></Carousel>
                <BlogPost postRecords={this.state.postRecords} imageRandom={this.state.imageRandom}
                 staticRandom={this.state.staticRandom}></BlogPost>
            </React.Fragment>
        )
    }
}

export default Home
