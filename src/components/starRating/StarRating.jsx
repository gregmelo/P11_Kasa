import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./StarRating.scss";

/**
 * Composant StarRating
 * 
 * Ce composant affiche une notation sous forme d'étoiles, avec un certain nombre 
 * d'étoiles remplies correspondant à la note donnée. 
 * La notation est sur un total fixe de 5 étoiles.
 * 
 * @module StarRating
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - La note (entre 0 et 5) à afficher.
 * 
 * @returns {JSX.Element} - Un élément JSX représentant la notation par étoiles.
 */
export default function StarRating({ rating }) {
  const totalStars = 5; // Nombre total d'étoiles à afficher

  return (
    <div className="star-rating">
      {/* Génération dynamique des étoiles */}
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index} // Clé unique pour chaque étoile
          icon={faStar} // Icône d'étoile
          className={index < rating ? "star-filled" : "star-empty"} // Classe en fonction de la note
        />
      ))}
    </div>
  );
}

/**
 * Validation des types des propriétés.
 * 
 * @property {number} rating - La note à afficher, requise.
 *                          - Doit être un nombre compris entre 0 et 5.
 */
StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
