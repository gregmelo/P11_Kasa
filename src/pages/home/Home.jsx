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
import './Home.scss';

/**
 * Fonction principale du composant Home.
 * 
 * @returns {JSX.Element} - Un composant contenant une bannière et une grille de cartes de logements.
 */
function Home() {
  return (
    <div className="content">
      <BannerImg title="Chez vous, partout et ailleurs" />
      <div className="housing-container">
        {logements.map((logement) => (
          <HousingCard 
            key={logement.id}
            id={logement.id} 
            title={logement.title}
            img={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
