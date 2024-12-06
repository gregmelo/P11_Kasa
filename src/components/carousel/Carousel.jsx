import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du défilement des images
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1  ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Si une seule image, n'affiche ni les boutons ni la numérotation
  if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt="Galerie" className="carousel-image" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1} sur ${images.length}`}
        className="carousel-image"
      />
      <button className="carousel-prev" onClick={handlePrev}>
      <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron-carousel"
        />
      </button>
      <button className="carousel-next" onClick={handleNext}>
      <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron-carousel"
        />
      </button>
      <div className="carousel-indicator">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
