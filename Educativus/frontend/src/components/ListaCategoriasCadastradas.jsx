import React, { useState, useEffect } from 'react'
import api from '../services/api'
import headers from '../services/headers'
import './ListaCategorias.css'
import { PiTrashSimpleDuotone } from 'react-icons/pi'

const ListaCategoriasCadastradas = () => {
  const [categorias, setCategorias] = useState([])
  const [searchCategorias, setSearchCategorias] = useState('')
  const searchLowCase = searchCategorias.toLowerCase()
  const listaTabela = categorias.filter(categorias =>
    categorias.nome_categoria.toLowerCase().includes(searchLowCase)
  )
  const returnHeaders = headers()

  function desejaApagar(id) {
    const userConfirmed = window.confirm('Deseja apagar a categoria: ' + id)
    if (userConfirmed) {
      async function apagaAula(id) {
        try {
          const response = await api.delete(`api/categoria/${id}/`, {
            headers: returnHeaders
          })
          if (response.status === 200) {
            alert('Categoria Apagada!')
            setTimeout(function () {
              window.location.reload(true)
            }, 3000)
          }
        } catch (err) {
          alert(err.message)
          setTimeout(function () {
            window.location.reload(true)
          }, 3000)
        }
      }
      apagaAula(id)
    }
  }

  async function getCategorias() {
    try {
      const res = await api.get('/api/categoria')
      setCategorias(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getCategorias()
  }, [])

  const listaAulas = listaTabela.map(categoria => (
    <tr key={categoria.id} className="border-b dark:border-neutral-500">
      <td className="px-6 py-4 font-medium">{categoria.id}</td>
      <td className="px-6 py-4">{categoria.nome_categoria}</td>
      <td className="px-6 py-4">{categoria.imagem_categoria}</td>
      <td className="px-6 py-4">
        <div className="flex justify-center">
          <a
            className="cursor-pointer"
            onClick={() => desejaApagar(categoria.id)}
          >
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
          value={searchCategorias}
          onChange={e => setSearchCategorias(e.target.value)}
        />
      </div>
      <table className="tabela border-2">
        <thead className="border-b bg-red-500 font-medium dark:border-neutral-500 text-white">
          <tr className="border-2">
            <th scope="col" className="px-6 py-4">
              ID
            </th>
            <th scope="col">Categoria</th>
            <th scope="col">Imagem</th>
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

export default ListaCategoriasCadastradas
