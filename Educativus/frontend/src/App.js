import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import LoginForm from './routes/LoginForm'
import CadastroUsuario from './routes/CadastroUsuario'
import ListaAulas from './routes/ListaAulas'
import Aula from './routes/Aula'
import CadastroAula from './routes/CadastroAula'
import CadastroCategoria from './routes/CadastroCategoria'

function App() {
  const token = localStorage.getItem('token')

  useEffect(() => {
    document.title = 'Educativus'
  }, [])

  return (
    <>
      {token ? (
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/aula/*" element={<Aula />} />
          <Route path="/treinamentos" element={<ListaAulas />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/cadastroaula" element={<CadastroAula />} />
          <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/aula/*" element={<Aula />} />
          <Route path="/treinamentos" element={<ListaAulas />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      )}
    </>
  )
}

export default App
