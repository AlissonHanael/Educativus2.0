import React from 'react'
import ListaAulas from '../components/ListaAulas'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'

const AulasCadastradas = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <MenuLateral />
        <div>
          <p className="page-identifier">Aulas Cadastradas</p>
          <ListaAulas />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AulasCadastradas
