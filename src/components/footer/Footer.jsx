import logo_footer from '../../assets/logo_footer.svg'; // Import du logo pour le pied de page.
import './Footer.scss'; // Import du fichier SCSS

/**
 * Composant Footer
 * 
 * Ce composant représente le pied de page de l'application. Il affiche le logo de l'application et un texte de copyright.
 * Le texte de copyright indique l'année en cours et que tous les droits sont réservés par Kasa.
 * 
 * @returns {JSX.Element} Le composant du pied de page.
 */
export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="footer-image" src={logo_footer} alt="Kasa logo" />
      <p className="footer-text">&copy; 2024 Kasa. All rights reserved.</p>
    </footer>
  );
}