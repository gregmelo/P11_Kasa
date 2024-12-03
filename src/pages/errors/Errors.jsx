/**
 * Composant Errors
 * 
 * Ce composant affiche une page d'erreur 404 lorsque l'utilisateur
 * tente d'accéder à une route qui n'existe pas.
 * 
 * @module Errors
 */

import { Link } from 'react-router-dom';
import './Errors.scss';

/**
 * Fonction principale du composant Errors.
 * 
 * @returns {JSX.Element} - Un composant contenant un message d'erreur, un code d'erreur, et un lien de redirection vers la page d'accueil.
 */
function Errors() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default Errors;
