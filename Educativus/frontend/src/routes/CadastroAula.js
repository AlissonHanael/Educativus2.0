import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuLateral from '../components/MenuLateral'
import FormCadastroAula from '../components/FormCadastroAula'
import ListaAulas from '../components/ListaAulas'
import { useCookies } from 'react-cookie'
import { redirect } from 'react-router-dom'

const CadastroAula = () => {
  const cookies = useCookies('sessionid')
  console.log(cookies)

  if (cookies.sessionid === false) {
    redirect('/login')
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-[1_2]">
        <MenuLateral />
        <div>
          <FormCadastroAula />
          <ListaAulas />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CadastroAula
