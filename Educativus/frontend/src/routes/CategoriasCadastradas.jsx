import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'
import ListaCategoriasCadastradas from '../components/ListaCategoriasCadastradas'

const AulasCadastradas = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <MenuLateral />
        <div className="w-full">
          <p className="page-identifier">Categorias Cadastradas</p>
          <ListaCategoriasCadastradas />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AulasCadastradas
