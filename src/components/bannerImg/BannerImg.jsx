import PropTypes from 'prop-types';
import "./bannerImg.scss";

/**
 * Composant BannerImg
 * 
 * Ce composant affiche une bannière avec une image et un titre optionnel.
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {string} [props.title] - Le titre à afficher dans la bannière (optionnel).
 * @param {string} props.imageSrc - L'URL de l'image de la bannière.
 * @returns {JSX.Element} Le composant de la bannière.
 */
function BannerImg({ title, imageSrc }) {
  return (
    <div 
      className="banner-img" 
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {/*La ligne {title && <h1>{title}</h1>} dit ceci :

      Si la prop title contient une valeur "véritable" (c'est-à-dire une chaîne de caractères qui n'est ni vide ni undefined),
      Alors affiche l’élément <h1> avec le contenu de title.
      Sinon, n’affiche rien.*/}
      {title && <h1>{title}</h1>}
    </div>
  );
}

BannerImg.propTypes = {
  title: PropTypes.string, // La prop 'title' est de type string et est optionnelle.
  imageSrc: PropTypes.string.isRequired, // La prop 'imageSrc' est obligatoire et doit être une chaîne de caractères.
};

export default BannerImg;
