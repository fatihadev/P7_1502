import React from 'react'
import '../style/notfound.css'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'

function NotFound() {
  return (
    <div>
      <Header />
      <div class="error">
        <h1 className="numero">404</h1>
        <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      </div>

      <div className="retourpage">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Retour sur la page d'acceuil
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound