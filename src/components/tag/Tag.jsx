import PropTypes from "prop-types";
import "./Tag.scss"; // Fichier pour les styles associés au composant

/**
 * Composant Tag
 * 
 * Ce composant affiche un élément visuel simple, appelé "tag", qui contient du texte.
 * Les tags peuvent être utilisés pour afficher des catégories, des étiquettes ou des mots-clés.
 * 
 * @module Tag
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.text - Le texte à afficher dans le tag.
 * 
 * @returns {JSX.Element} - Un élément JSX représentant le tag.
 */
export default function Tag({ text }) {
  return (
    <div className="tag">
      {/* Texte à afficher dans le tag */}
      <p>{text}</p>
    </div>
  );
}

/**
 * Validation des types des propriétés.
 * 
 * @property {string} text - Texte requis qui sera affiché dans le tag.
 */
Tag.propTypes = {
  text: PropTypes.string.isRequired,
};
