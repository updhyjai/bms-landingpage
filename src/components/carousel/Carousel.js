import React from "react";
import * as images from "../common/images/carousel";
import ReactAliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = (props) => {
  const imageList = Object.keys(images).map((key) => {
    return <img src={images[key]} alt="" className="carousel-image" />;
  });

  return (
    <div className="carousel-container">
      <ReactAliceCarousel
        buttonsDisabled={true}
        dotsDisabled={true}
        autoPlay={true}
        duration={3000}
        autoPlayInterval={5000}
        items={imageList}
        mouseTrackingEnabled={true}
      />
    </div>
  );
};

export { Carousel };
