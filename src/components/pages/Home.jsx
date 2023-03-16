import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/home.scss';

export default function f() {
  return (
    <div className='wrapper' id="home">
      <h1>Bienvenue sur <span>SportSee</span></h1>
      <p>SportSee est une application qui vous aide a traquer
        les données relatives à vos entraînements sportifs.<br />
        SpotSee vous offre une vue d'ensemble la plus claire possible de vos
        données sous la forme de graphiques et de cartes vous permettant en un seul
        coup d'oeil de suivre votre progression.
      </p>
      <div className="navigation">
        <Link to='/user/12'>User A</Link>
        <Link to='/user/18'>User B</Link>
        <Link to='*'>Page 404</Link>
      </div>
    </div>
  )
}
