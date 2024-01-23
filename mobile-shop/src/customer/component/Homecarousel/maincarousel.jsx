import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Corouseldata } from './Corouseldata';
import { CarouselLarge } from './CarouselLarge';

const MainCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const largeScreenImages = Corouseldata.map((item) => (
    <img className='cursor-pointer transform hover:scale-105' role='presentation' src={item.image} alt='' />
  ));

  const smallScreenImages = CarouselLarge.map((item) => (
    <img className='cursor-pointer transform hover:scale-105' role='presentation' src={item.image} alt='' />
  ));

  return (
    <div className=''>
        <AliceCarousel
      items={screenWidth <= 720 ? smallScreenImages : largeScreenImages}
      autoPlay
      autoPlayStrategy='none'
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType='fadeout'
      infinite
      disableButtonsControls
      disableDotsControls
      touchTracking={true}

    />
    </div>
    
  );
};

export default MainCarousel;
