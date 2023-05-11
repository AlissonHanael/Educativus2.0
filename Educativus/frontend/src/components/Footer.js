import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer border-t border-slate-70">
      <div className="footer--itens flex col justify-evenly p-5 bg-[#f5f5f5] pb-8">
        <div className="footer--text">
          <h3 className="text-2xl">Mapa do site</h3>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/treinamentos">Acesse os Treinamentos</Link>
            </li>
          </ul>
        </div>
        <div className="footer--text">
          <h3 className="text-2xl">Administração do Site</h3>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-slate-100">
        Copyright © 2022 Todos os Direitos Reservados.
      </div>
    </section>
  )
}

export default Footer
