import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import mens_kurta from "../../../Data/men_kurta";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 5 },
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  const getHeight = () => {
    if (screenWidth <= 1023) {
      return "270px"; // Set your desired height for mobile screens
    } else {
      return "310px"; // Set your desired height for larger screens
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    
    <div
      className="relative "
      style={{
        maxWidth: "95%",
        margin: "0 auto",
        height: getHeight(),
      }}
      
    >
      <h3 className=" mb-5 lg:text-xl">{sectionName}</h3>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
        touchTracking={true}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        ref={carouselRef}
      />

      <Button
        onClick={slideNext}
        // variant="contained"
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "4.5rem",
          right: "0rem",
          bgcolor: "transparent",
          borderRadius: "50%", 
          width: "30px", 
          height: "60px", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          outline:"none",
          transform:"translateX(25%)"
          //border: '0.1px solid transparent', transition: 'border-color 0.3s','&:hover': {borderColor: "goldgem", bgcolor: 'transparent'}
        }}
        // css={{
        //   ":active": {
        //     bgcolor: "gold !important", // Change the background color on click
        //   },
        // }}
      >
        <KeyboardArrowRightOutlinedIcon 
          sx={{ fontSize: "20px" }}/>
          
      </Button>

      <Button
        onClick={slidePrev}
        
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "4.5rem",
          left: "0rem",
          bgcolor: "transparent",
          borderRadius: "50%", // Make the button circular
          width: "30px", // Set the width to control the button size
          height: "60px", // Set the height to control the button size
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform:"translateX(-25%)"
        }}
      >
        <KeyboardArrowLeftOutlinedIcon 
          sx={{ fontSize: "20px"}}
        />
      </Button>
    </div>
  );
};

export default HomeSectionCarousel;
