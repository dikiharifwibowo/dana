import React, { Component } from 'react';
import Carousel from '../components/carousel/Carousel';
import BlogPost from '../components/blogpost/BlogPost';
import axios from 'axios';
import { connect } from "react-redux";

class Home extends Component {
    state = {
        postRecords: [],
        descRandom: '',
        imageRandom: '',
    }

    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
            this.setState({
                postRecords: res.data
            })
        })
        this.loadDescRandom()
        this.loadRandomImage()
        this.props.handleChangePage()
    }
    loadDescRandom = () => {
        axios.get(`https://api.chucknorris.io/jokes/random`)
        .then(res => {
            this.setState({
                descRandom: res.data.value
            })
        })
    }
    loadRandomImage = () => {
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
                <BlogPost parentCallback={() => { this.loadRandomImage(); this.loadDescRandom()} }  postRecords={this.state.postRecords} imageRandom={this.state.imageRandom}
                 descRandom={this.state.descRandom}></BlogPost>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: () => dispatch({ type: 'CHANGE_PAGE_HOME' }),
    }
}
export default connect('', mapDispatchToProps)(Home);
