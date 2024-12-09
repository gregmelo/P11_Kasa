import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.scss";

/**
 * Composant Carousel
 * 
 * Ce composant affiche une galerie d'images sous forme de carrousel interactif. 
 * Les utilisateurs peuvent naviguer entre les images grâce aux boutons "Précédent" et "Suivant". 
 * Une seule image s'affiche à la fois, avec une numérotation indiquant la position actuelle.
 * 
 * @module Carousel
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.images - Tableau d'URLs des images à afficher dans le carrousel.
 * 
 * @returns {JSX.Element} - Un composant de type carrousel.
 */
export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Passe à l'image suivante dans le carrousel.
   * Si l'utilisateur est sur la dernière image, il revient à la première.
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Passe à l'image précédente dans le carrousel.
   * Si l'utilisateur est sur la première image, il revient à la dernière.
   */
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  /**
   * Gestion des cas où il n'y a qu'une seule image.
   * Si le tableau `images` contient une seule image, les boutons et la numérotation ne sont pas affichés.
   */
  if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt="Galerie" className="carousel-image" />
      </div>
    );
  }

  return (
    <div className="carousel">
      {/* Affichage de l'image actuelle */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1} sur ${images.length}`}
        className="carousel-image"
      />
      {/* Bouton pour l'image précédente */}
      <button className="carousel-prev" onClick={handlePrev}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron-carousel"
        />
      </button>
      {/* Bouton pour l'image suivante */}
      <button className="carousel-next" onClick={handleNext}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron-carousel"
        />
      </button>
      {/* Indicateur de position actuelle */}
      <div className="carousel-indicator">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
}

/**
 * Validation des types des propriétés.
 * 
 * @property {string[]} images - Tableau d'URLs des images, requis.
 */
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
