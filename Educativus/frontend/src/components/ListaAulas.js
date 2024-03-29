import React, { useState, useEffect } from 'react'
import api from '../services/api'
import headers from '../services/headers'
import './ListaAulas.css'
import { PiPencilSimpleLineDuotone, PiTrashSimpleDuotone } from 'react-icons/pi'

const ListaAulas = () => {
  const [aulas, setAulas] = useState([])
  const [searchAulas, setSearchAulas] = useState('')
  const searchLowCase = searchAulas.toLowerCase()
  const listaTabela = aulas.filter(aulas =>
    aulas.titulo_aula.toLowerCase().includes(searchLowCase)
  )
  const returnHeaders = headers()

  function desejaApagar(id) {
    const userConfirmed = window.confirm('Deseja apagar a aula: ' + id)
    if (userConfirmed) {
      async function apagaAula(id) {
        try {
          const response = await api.delete(`api/aulas/${id}/`, {
            headers: returnHeaders
          })
          if (response.status === 200) {
            alert('Aula Apagada!')
            setTimeout(function () {
              window.location.reload(true)
            }, 3000)
          }
        } catch (err) {
          setTimeout(function () {
            window.location.reload(true)
          }, 3000)
        }
      }
      apagaAula(id)
    }
  }

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

  const listaAulas = listaTabela.map(aula => (
    <tr key={aula.id} className="border-b dark:border-neutral-500">
      <td className="px-6 py-4 font-medium">{aula.id}</td>
      <td className="px-6 py-4">{aula.titulo_aula}</td>
      <td className="px-6 py-4">{aula.descricao_aula}</td>
      <td className="px-6 py-4">{aula.url_aula}</td>
      <td className="px-6 py-4">
        <div className="flex justify-between">
          <a className="cursor-pointer" href={`cadastroaula/${aula.id}`}>
            <PiPencilSimpleLineDuotone />
          </a>
          <a className="cursor-pointer" onClick={() => desejaApagar(aula.id)}>
            <PiTrashSimpleDuotone />
          </a>
        </div>
      </td>
    </tr>
  ))

  return (
    <div>
      <div className="search-bar bg-[#fffafa] p-4 flex items-center">
        <p className="p-2">Pesquisar</p>
        <input
          className="search-bar_field"
          type="search"
          value={searchAulas}
          onChange={e => setSearchAulas(e.target.value)}
        />
      </div>
      <table className="tabela border-2">
        <thead className="border-b bg-red-500 font-medium dark:border-neutral-500 text-white">
          <tr className="border-2">
            <th scope="col" className="px-6 py-4">
              ID
            </th>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th scope="col">YouTube ID</th>
            <th scope="col" className="px-6">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>{listaAulas}</tbody>
      </table>
    </div>
  )
}

export default ListaAulas
