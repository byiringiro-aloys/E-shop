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
        // arrows: false
    };

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out'
        });
        AOS.refresh();
    })

    return (
        <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
            <Slider className='w-full' {...settings}>
                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[700px] flex flex-col justify-center items-start gap-10 bg-cover  bg-no-repeat bg-center' style={{ backgroundImage: `url(${dslr})`}}>
                        <h1 data-aos='zoom-in' data-aos-delay='50' className=''></h1>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Hero
