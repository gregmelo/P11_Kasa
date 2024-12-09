/**
 * Composant HousingCard
 * 
 * Ce composant affiche une carte représentant un logement avec son image et son titre.
 * Chaque carte est cliquable et redirige l'utilisateur vers la page détaillée du logement correspondant.
 * 
 * @module HousingCard
 */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './HousingCard.scss';

/**
 * Fonction principale du composant HousingCard.
 * 
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.id - L'identifiant unique du logement.
 * @param {string} props.title - Le titre ou le nom du logement.
 * @param {string} props.img - L'URL de l'image représentant le logement.
 * @returns {JSX.Element} - Une carte de logement cliquable avec une image de fond et un titre.
 */
export default function HousingCard({ id, title, img }) {
    return (
        <Link to={`/housing/${id}`}>
            <article 
                className="housing-card"
                style={{ backgroundImage: `url(${img})` }}
            >
                <p>{title}</p>
            </article>
        </Link>
    );
}

HousingCard.propTypes = {
    /**
     * Identifiant unique du logement.
     */
    id: PropTypes.string.isRequired,

    /**
     * Titre ou nom du logement.
     */
    title: PropTypes.string.isRequired,

    /**
     * URL de l'image représentant le logement.
     */
    img: PropTypes.string.isRequired,
};