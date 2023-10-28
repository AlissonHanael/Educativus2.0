import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'
import './CadastroManual.css'
import ListaManuaisCadastrados from '../components/ListaManuaisCadastrados'

const ManuaisCadastrados = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <MenuLateral />
        <div className="container">
          <p className="page-identifier">Manuais Cadastrados</p>
          <ListaManuaisCadastrados />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ManuaisCadastrados
