import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'
import FormCadastroManual from '../components/FormCadastroManual'

const CadastroManual = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-[1_2]">
        <MenuLateral />
        <div>
          <p className="page-identifier">Novo Manual</p>
          <FormCadastroManual />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CadastroManual
