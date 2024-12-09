import "./Dropdown.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

/**
 * Composant Dropdown
 * 
 * Ce composant affiche une section repliable contenant un titre et une description. 
 * La description peut être une chaîne de caractères ou une liste d'éléments.
 * L'utilisateur peut cliquer sur le titre pour afficher ou masquer la description.
 * 
 * @module Dropdown
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du dropdown.
 * @param {string|string[]} props.description - La description associée au dropdown, qui peut être un texte ou une liste.
 * 
 * @returns {JSX.Element} - Un élément JSX représentant le dropdown.
 */
export default function Dropdown({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Change l'état du dropdown (ouvert/fermé).
   */
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* En-tête du dropdown */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron ${isOpen ? "rotate" : ""}`}
        />
      </div>

      {/* Contenu du dropdown, affiché ou masqué selon l'état */}
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {Array.isArray(description) ? (
          // Si la description est une liste, affiche une liste non ordonnée
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Sinon, affiche une simple description textuelle
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}

/**
 * Validation des types des propriétés.
 * 
 * @property {string} title - Le titre du dropdown, requis.
 * @property {string|string[]} description - La description associée, qui peut être un texte ou une liste.
 */
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
