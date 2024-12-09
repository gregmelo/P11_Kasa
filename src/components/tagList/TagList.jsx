import PropTypes from "prop-types";
import Tag from "../tag/Tag";
import "./TagList.scss"; // Fichier pour les styles associés au composant

/**
 * Composant TagList
 * 
 * Ce composant affiche une liste de tags en utilisant le composant `Tag`.
 * Il est idéal pour afficher des catégories, des étiquettes ou des mots-clés associés à un élément.
 * 
 * @module TagList
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string[]} props.tags - Tableau de chaînes de caractères représentant les tags à afficher.
 * 
 * @returns {JSX.Element} - Un élément JSX représentant une liste de tags.
 */
export default function TagList({ tags }) {
  return (
    <div className="tag-list">
      {/* Affichage de chaque tag en utilisant le composant Tag */}
      {tags.map((tag, index) => (
        <Tag text={tag} key={index} />
      ))}
    </div>
  );
}

/**
 * Validation des types des propriétés.
 * 
 * @property {string[]} tags - Tableau de chaînes de caractères représentant les tags à afficher. Ce champ est requis.
 */
TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
