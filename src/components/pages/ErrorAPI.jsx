import React from 'react'

/**
 * Display an error page if the app fail to fetch the data from the API
 * @returns {JSX}
 */
export default function ErrorAPI() {
  return (
    <div className='wrapper'>
        <h1>Erreur de <span>l'API</span></h1>
        <p>Il semblerait que nous rencontrions des problèmes avec les 
            services SportSee.<br />
            Vos données sont par conséquent indisponibles pour le moment.<br />
            Veuillez vérifier votre connexion internet.<br />
            Si le problème persiste, contactez nous.
        </p>
    </div>
  )
}
