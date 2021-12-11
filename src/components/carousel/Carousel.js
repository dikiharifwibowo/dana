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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
                <Slider {...settings}>
                    {carouselCards.map((card, index) => (
                    <div key={index} class="carousel">
                        <div style={{backgroundImage: `url(${card.imageSrc})` }} class="image-slider">
                            <p class="title is-1">{card.title}</p>
                            <p class="subtitle is-6">{card.description}</p>
                            <button class="button transparent">MORE INFO</button>
                        </div>
                    </div>
                    ))}
                </Slider>
        </React.Fragment>
    )
}

export default Carousel
