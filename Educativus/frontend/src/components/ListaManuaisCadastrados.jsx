import React, { useState, useEffect } from 'react'
import api from '../services/api'
import headers from '../services/headers'
import './ListaCategorias.css'
import { PiPencilSimpleLineDuotone, PiTrashSimpleDuotone } from 'react-icons/pi'

const ListaAulas = () => {
  const [manuais, setManuais] = useState([])
  const [searchManuais, setSearchManuais] = useState('')
  const searchLowCase = searchManuais.toLowerCase()
  const listaTabela = manuais.filter(manuais =>
    manuais.titulo_pdf.toLowerCase().includes(searchLowCase)
  )
  const returnHeaders = headers()

  function desejaApagar(id) {
    const userConfirmed = window.confirm('Deseja apagar o manual: ' + id)
    if (userConfirmed) {
      async function apagaAula(id) {
        try {
          const response = await api.delete(`api/manuais/${id}/`, {
            headers: returnHeaders
          })
          if (response.status === 200) {
            alert('Manual Apagado!')
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

  async function getManuais() {
    try {
      const res = await api.get('/api/manuais')
      setManuais(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getManuais()
  }, [])

  const listaManuais = listaTabela.map(manuais => (
    <tr key={manuais.id} className="border-b dark:border-neutral-500">
      <td className="px-6 py-4 font-medium">{manuais.id}</td>
      <td className="px-6 py-4">{manuais.titulo_pdf}</td>
      <td className="px-6 py-4">{manuais.descricao_pdf}</td>
      <td className="px-6 py-4">{manuais.pdf_file}</td>
      <td className="px-6 py-4">
        <div className="flex justify-between">
          <a className="cursor-pointer" href={`cadastromanual/${manuais.id}`}>
            <PiPencilSimpleLineDuotone />
          </a>
          <a
            className="cursor-pointer"
            onClick={() => desejaApagar(manuais.id)}
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
          value={searchManuais}
          onChange={e => setSearchManuais(e.target.value)}
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
            <th scope="col">Arquivo</th>
            <th scope="col" className="px-6">
              Opções
            </th>
          </tr>
        </thead>
        <tbody>{listaManuais}</tbody>
      </table>
    </div>
  )
}

export default ListaAulas
