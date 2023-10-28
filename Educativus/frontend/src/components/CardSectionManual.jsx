import React, { useState, useEffect } from 'react'
import Card from './Card'
import api from '../services/api'
import './SearchBar.css'
import './loader.css'

export const CardSectionManual = () => {
  const [aulas, setAulas] = useState([])
  const [loadingAulas, setLoadingAulas] = useState(false)
  const [searchAulas, setSearchAulas] = useState('')
  const searchLowCase = searchAulas.toLowerCase()
  const manuais = aulas.filter(aulas =>
    aulas.titulo_pdf.toLowerCase().includes(searchLowCase)
  )

  async function getAulas() {
    setLoadingAulas(true)
    try {
      const res = await api.get('/api/manuais')
      setAulas(res.data)
    } catch (err) {
      alert(err.message)
    }
    setLoadingAulas(false)
  }
  useEffect(() => {
    getAulas()
  }, [])

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
      <div>
        {!loadingAulas && aulas ? (
          <div className="flex flex-wrap gap-x-6 bg-[#fffafa] p-10">
            {manuais.map(aulas => (
              <Card
                key={aulas.id}
                title={aulas.titulo_pdf}
                url={`http://localhost:8000${aulas.pdf_file}`}
                category={aulas.categoria_pdf}
                buttonText={'Download'}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-full h-[50vh] justify-center items-center">
            <p className="loader"></p>
          </div>
        )}
      </div>
    </div>
  )
}
