import BannerImg from "../../components/bannerImg/BannerImg";
import AboutBanner from "../../assets/about_banner.png";
import Dropdown from "../../components/dropdown/Dropdown";

/**
 * Composant React représentant la page "À propos".
 * 
 * Ce composant affiche un titre et un paragraphe décrivant la page "À propos".
 * 
 * @returns {JSX.Element} Un élément JSX contenant un titre et un paragraphe.
 */

const dropdowns_description = [
  {
    title : "Fiabilité", 
    description : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title : "Respect", 
    description : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title : "Service", 
    description : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title : "Sécurité", 
    description : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  },
]


function About() {
  return (
    <div>
      {/* <Header /> */}
      <BannerImg imageSrc={AboutBanner} />
      <div className="dropdown-container">
      {dropdowns_description.map((item, index) => (
          <Dropdown key={index} title={item.title} description={item.description} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
