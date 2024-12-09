import BannerImg from "../../components/bannerImg/BannerImg";
import AboutBanner from "../../assets/about_banner.png";
import Dropdown from "../../components/dropdown/Dropdown";

/**
 * Composant About
 * 
 * Ce composant représente la page "À propos" et affiche une bannière ainsi qu'une liste de sections 
 * déroulantes contenant des descriptions des valeurs et engagements de la plateforme.
 * 
 * @module About
 */

/**
 * Données des sections déroulantes.
 * 
 * Chaque objet représente une section avec un titre et une description associée, 
 * expliquant les valeurs fondamentales de Kasa.
 * 
 * @constant {Array<Object>}
 */
const dropdowns_description = [
  {
    title: "Fiabilité", 
    description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect", 
    description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service", 
    description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Sécurité", 
    description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  },
];

/**
 * Fonction principale du composant About.
 * 
 * Cette fonction génère la page "À propos", avec une bannière en haut et une liste de composants `Dropdown` 
 * affichant les descriptions des valeurs fondamentales de Kasa.
 * 
 * @returns {JSX.Element} - Un composant représentant la page "À propos".
 */
export default function About() {
  return (
    <div>
      {/* Affiche une bannière avec une image */}
      <BannerImg imageSrc={AboutBanner} />
      {/* Conteneur pour les sections déroulantes */}
      <div className="dropdown-container">
        {dropdowns_description.map((item, index) => (
          <Dropdown 
            key={index} // Clé unique basée sur l'index.
            title={item.title} // Titre de la section.
            description={item.description} // Description associée au titre.
          />
        ))}
      </div>
    </div>
  );
}
