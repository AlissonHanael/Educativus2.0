import React, { useEffect } from 'react'
import './index.css'
import Home from './routes/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './routes/NotFound'
import LoginForm from './routes/LoginForm'
import CadastroUsuario from './routes/CadastroUsuario'
import SigninForm from './routes/SigninForm'
import ListaAulas from './routes/ListaAulas'
import Aula from './routes/Aula'
import CadastroAula from './routes/CadastroAula'
import CadastroCategoria from './routes/CadastroCategoria'

function App() {
  useEffect(() => {
    document.title = 'Educativus'
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treinamentos" element={<ListaAulas />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/aula/*" element={<Aula />} />
        <Route path="/cadastroaula" element={<CadastroAula />} />
        <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
      </Routes>
    </>
  )
}

export default App
