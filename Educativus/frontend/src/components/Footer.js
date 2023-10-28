import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const logout = function (e) {
  localStorage.clear()
}

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
            <li>
              <Link to="/manuais">Acesse os Manuais</Link>
            </li>
          </ul>
        </div>
        <div className="footer--text">
          <h3 className="text-2xl">Administração</h3>
          <ul>
            <li>
              <>
                {localStorage.getItem('token') ? (
                  <div className="flex flex-col">
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/cadastroaula"
                    >
                      Nova Aula
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/cadastrocategoria"
                    >
                      Nova Categoria
                    </Link>
                    <Link
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/cadastrousuario"
                    >
                      Novo Usuário
                    </Link>
                  </div>
                ) : (
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-slate-100">
        Copyright © 2023 Todos os Direitos Reservados.
      </div>
    </section>
  )
}

export default Footer
