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
import CadastroManual from './routes/CadastroManual'
import ListaManuais from './routes/ListaManuais'
import { CardSectionManual } from './components/CardSectionManual'
import AulasCadastradas from './routes/AulasCadastradas'
import CategoriasCadastradas from './routes/CategoriasCadastradas'
import ManuaisCadastrados from './routes/ManuaisCadastrados'

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
          <Route path="/cardmanual" element={<CardSectionManual />} />
          <Route path="/aula/*" element={<Aula />} />
          <Route path="/treinamentos" element={<ListaAulas />} />
          <Route path="/manuais" element={<ListaManuais />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/cadastroaula/*" element={<CadastroAula />} />
          <Route path="/cadastromanual/*" element={<CadastroManual />} />
          <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
          <Route path="/aulascadastradas" element={<AulasCadastradas />} />
          <Route path="/manuaiscadastrados" element={<ManuaisCadastrados />} />
          <Route
            path="/categoriascadastradas"
            element={<CategoriasCadastradas />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/aula/*" element={<Aula />} />
          <Route path="/treinamentos" element={<ListaAulas />} />
          <Route path="/manuais" element={<ListaManuais />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      )}
    </>
  )
}

export default App
