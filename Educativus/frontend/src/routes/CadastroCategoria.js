import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'
import FormCadastroCategoria from '../components/FormCadastroCategoria'

const CadastroCategoria = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-[1_2]">
        <MenuLateral />
        <FormCadastroCategoria />
      </div>
      <Footer />
    </div>
  )
}

export default CadastroCategoria
