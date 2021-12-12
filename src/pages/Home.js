import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Carousel from '../components/carousel/Carousel';
import Card from '../components/card/Card';
import Footer from '../components/footer/Footer';

const Home = () => {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Carousel></Carousel>
                <Card></Card>
                <Footer></Footer>
            </React.Fragment>
        )
}

export default Home
