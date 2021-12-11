import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import Card from '../components/card/Card';

const Home = () => {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Carousel></Carousel>
                <Card></Card>
            </React.Fragment>
        )
}

export default Home
