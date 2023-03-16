import React from 'react'
import logo from '../logo.png';

/**
 * The header of the app
 * @returns {HTMLElement}
 */
export default function Header() {
  document.title = 'SportSee - Tableau de Bord';
  return (
    <header>
        <img src={logo} alt="logo sportsee" />
        <ul>
            <li className='header-item'><a href="/">Accueil</a></li>
            <li className='header-item'>Profil</li>
            <li className='header-item'>Régalages</li>
            <li className='header-item'>Communauté</li>
        </ul>
    </header>
  )
}
