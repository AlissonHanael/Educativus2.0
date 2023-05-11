import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import api from '../services/api'
import './loader.css'

export const CardSection = () => {
  const [aulas, setAulas] = useState([])
  const [loadingAulas, setLoadingAulas] = useState(false)

  async function getAulas() {
    setLoadingAulas(true)
    try {
      const res = await api.get('/api/aulas')
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
      {!loadingAulas && aulas ? (
        <div className="flex flex-wrap bg-[#fffafa] p-10">
          {aulas.map(aulas => (
            <Card
              key={aulas.id}
              title={aulas.titulo_aula}
              url={aulas.id}
              category={aulas.categoria_aula}
            />
          ))}
        </div>
      ) : (
        <div className="flex w-full h-[50vh] justify-center items-center">
          <p className="loader"></p>
        </div>
      )}
    </div>
  )
}
