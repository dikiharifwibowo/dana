import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

const Carousel = () => {
    const carouselCards = [
    {
        imageSrc: 'https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg',
        title: 'Studio Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
    },
    {
        imageSrc: 'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg',
        title: 'Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
    },
    {
        imageSrc: 'https://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg',
        title: 'King Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
    },
   ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <div class="container">
                <Slider {...settings}>
                    {carouselCards.map((card, index) => (
                    <div key={index}>
                        <h2>{card.title}</h2>
                        <img alt={card.title} src={card.imageSrc} style={{ width: '100%' }} />
                        <p>{card.description}</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                    ))}
                </Slider>
            </div>
        </React.Fragment>
    )
}

export default Carousel
