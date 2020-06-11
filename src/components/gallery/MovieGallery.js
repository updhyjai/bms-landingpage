/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import ReactAliceCarousel from "react-alice-carousel";
import * as images from "../common/images/moviesposter";
import "react-alice-carousel/lib/alice-carousel.css";

const MovieGallery = ({ data, title }) => {
  const handleOnDragStart = (e) => e.preventDefault();

  const imageList = data.map((item) => {
    const imgSrc = images[item.id];
    return (
      <img
        key={item.id}
        src={imgSrc}
        onDragStart={handleOnDragStart}
        className="movie-gallery-image"
        alt=""
      />
    );
  });
  return (
    <div className="movie-gallery-container">
      <div className="movie-gallery-title-container">
        <h6 className="movie-gallery-title">{title}</h6>
        <a className="movie-gallery-view-all-link" href="#">
          {"View All"}
        </a>
      </div>
      <ReactAliceCarousel
        buttonsDisabled={true}
        dotsDisabled={true}
        duration={2000}
        autoPlayInterval={2000}
        infinite={true}
        items={imageList}
        mouseTrackingEnabled={true}
        touchTrackingEnabled={true}
      />
    </div>
  );
};

MovieGallery.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export { MovieGallery };
