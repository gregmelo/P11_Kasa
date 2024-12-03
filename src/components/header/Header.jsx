import { NavLink } from 'react-router-dom'; // Importation de NavLink pour gérer les liens de navigation avec des classes dynamiques.
import logo from '../../assets/logo.svg'; // Importation du logo de l'application.
import './Header.scss'; // Importation des styles spécifiques au composant Header.

/**
 * Composant Header
 * 
 * Ce composant représente la barre de navigation de l'application. Il contient un logo cliquable qui redirige vers la page d'accueil, 
 * ainsi que des liens de navigation vers les différentes pages : Accueil et À Propos. Les liens de navigation changent de style
 * lorsque la page correspondante est active, grâce à l'ajout automatique de la classe 'active' via NavLink.
 * 
 * @returns {JSX.Element} Le composant de la barre de navigation.
 */
function Header() {
  return (
    <nav className="nav-container">
      {/* Lien vers la page d'accueil avec le logo cliquable */}
      <NavLink to="/">
        <img className="home-logo" src={logo} alt="Kasa logo" />
      </NavLink>
      
      {/* Conteneur pour les liens de navigation */}
      <div>
        {/* Lien vers la page d'accueil. La classe 'active' est ajoutée automatiquement si la page est active */}
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          to="/"
        >
          Accueil
        </NavLink>
        
        {/* Lien vers la page "À Propos". La classe 'active' est ajoutée automatiquement si la page est active */}
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          to="/about"
        >
          À Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header; // Exportation du composant Header pour qu'il soit utilisé dans d'autres parties de l'application.
