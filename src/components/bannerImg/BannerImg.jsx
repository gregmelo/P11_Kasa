import PropsTypes from 'prop-types';
import "./bannerImg.scss";

/**
 * Composant BannerImg
 * 
 * Ce composant affiche une bannière avec un titre optionnel. Si un titre est passé en prop, il sera affiché dans un élément `<h1>`.
 * Ce composant permet de personnaliser facilement l'affichage d'une image de bannière avec un titre.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} [props.title] - Le titre à afficher dans la bannière (optionnel).
 * @returns {JSX.Element} Le composant de la bannière avec le titre (si fourni).
 */
function BannerImg({ title }) {
  return (
    <div className="banner-img">
      {title && <h1>{title}</h1>}
    </div>
  );
}

BannerImg.propTypes = {
  title: PropsTypes.string, // La prop 'title' est de type string et est optionnelle.
};

export default BannerImg; // Exportation du composant BannerImg pour qu'il soit utilisé dans d'autres parties de l'application.
