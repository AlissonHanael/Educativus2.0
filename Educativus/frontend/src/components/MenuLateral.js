import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateral = () => {
  return (
    <div className="inline-flex relative">
      <div className="flex flex-col h-full p-3 bg-white border-r-2 w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Menu</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/cadastroaula"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Nova aula</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/aulascadastradas"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Aulas Cadastradas</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/cadastrocategoria"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Nova Categoria</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/categoriascadastradas"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Categorias Cadastradas</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/cadastromanual"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Novo Manual</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/manuaiscadastrados"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <span>Manuais Cadastrados</span>
                </Link>
                <li className="rounded-sm">
                  <Link
                    to="/cadastrousuario"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span>Novo usuário</span>
                  </Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuLateral
