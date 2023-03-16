import { Link } from "react-router-dom";

/**
 * Display the 404 Page
 * @returns {JSX}
 */
export default function NotFound() {
  document.title = `SportSee - 404`
  return (
    <>
      <div className="wrapper" id="notfound">
          <h1><span>404</span></h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to='/'>Retourner sur la page d’accueil</Link>
      </div>
    </>
  )
}