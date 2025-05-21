import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        SlidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:500, 
        }); 
    })
    return (
        <div>
            heros section
        </div>
    )
}

export default Hero
