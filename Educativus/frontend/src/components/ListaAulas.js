import React, { useState, useEffect } from 'react'
import api from '../services/api'
import './ListaAulas.css'

const ListaAulas = () => {
  const [aulas, setAulas] = useState([])

  async function getAulas() {
    try {
      const res = await api.get('/api/aulas')
      setAulas(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getAulas()
  }, [])

  const listaAulas = aulas.map(aula => (
    <tr key={aula.id} className="border-b dark:border-neutral-500">
      <td className="px-6 py-4 font-medium">{aula.id}</td>
      <td className="px-6 py-4">{aula.titulo_aula}</td>
      <td className="px-6 py-4">{aula.descricao_aula}</td>
      <td className="px-6 py-4">{aula.url_aula}</td>
      <td className="px-6 py-4">teste</td>
    </tr>
  ))

  return (
    <table className="tabela border-2">
      <thead className="border-b bg-red-500 font-medium dark:border-neutral-500 text-white">
        <tr className="border-2">
          <th scope="col" className="px-6 py-4">
            ID
          </th>
          <th scope="col">Título</th>
          <th scope="col">Descrição</th>
          <th scope="col">YouTube ID</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>{listaAulas}</tbody>
    </table>
  )
}

export default ListaAulas
