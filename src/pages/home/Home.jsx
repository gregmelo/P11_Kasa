/**
 * Composant Home
 * 
 * Ce composant affiche la page d'accueil contenant une bannière et une liste de logements sous forme de cartes.
 * 
 * @module Home
 */

import BannerImg from '../../components/bannerImg/BannerImg';
import logements from '../../data/logements';
import HousingCard from '../../components/housingCard/HousingCard';
import HomeBanner from '../../assets/home_banner.png';
import './Home.scss';

/**
 * Fonction principale du composant Home.
 * 
 * Ce composant utilise les données de logements pour générer dynamiquement une grille de cartes. 
 * Chaque carte représente un logement avec son titre et son image de couverture. 
 * Une bannière avec un titre et une image est affichée en haut de la page.
 * 
 * @returns {JSX.Element} - Un composant contenant une bannière et une grille de cartes de logements.
 */

export default function Home() {
  return (
    <div className="content">
      <BannerImg 
        title="Chez vous, partout et ailleurs" 
        imageSrc={HomeBanner}
      />
      <div className="housing-container">
        {logements.map((logement) => (
          <HousingCard 
            key={logement.id} // Clé unique pour chaque logement.
            id={logement.id}  // Identifiant du logement.
            title={logement.title} // Titre du logement.
            img={logement.cover}  // Image de couverture du logement.
          />
        ))}
      </div>
    </div>
  );
}