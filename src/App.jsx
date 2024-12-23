import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/Layout';
import About from './pages/about/About';
import Errors from './pages/errors/Errors';
import Home from './pages/home/Home';
import HousingDetails from './pages/housingDetails/HousingDetails';
import './utils/style/global.scss';

/**
 * Composant App
 * 
 * Ce composant est l'élément principal de l'application. Il configure le routage via React Router et inclut les composants Header et Footer. 
 * Les différentes pages de l'application sont accessibles en fonction de l'URL :
 * - La page d'accueil (Home) est affichée à l'URL "/".
 * - La page "À Propos" (About) est affichée à l'URL "/about".
 * - La page des détails d'un logement (HousingDetails) est affichée à l'URL "/housing/:id".
 * - En cas de route non définie, la page d'erreur (Errors) est affichée.
 * 
 * @returns {JSX.Element} Le composant principal de l'application avec le routage et l'affichage des pages.
 */

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<HousingDetails />} />
          <Route path="*" element={<Errors />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}