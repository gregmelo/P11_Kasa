import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

/**
 * Composant de mise en page principal.
 * 
 * Ce composant sert de structure générale pour l'application, 
 * comprenant un en-tête, un contenu principal (géré via React Router `Outlet`), 
 * et un pied de page.
 * 
 * @returns {JSX.Element} Le composant JSX représentant la mise en page.
 */
export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

