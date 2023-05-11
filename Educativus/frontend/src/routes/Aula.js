import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import api from '../services/api'
import '../components/loader.css'

const Aula = () => {
  let idAula = window.location.href
  idAula = idAula.split('aula/')[1]
  const [aula, setAula] = useState()
  const [loadingAulas, setLoadingAulas] = useState(false)

  async function getAula() {
    setLoadingAulas(true)
    try {
      const res = await api.get(`/api/aulas/${idAula}`)
      setAula(res.data)
    } catch (err) {
      alert(err.message)
    }
    setLoadingAulas(false)
  }
  useEffect(() => {
    getAula()
  }, [])

  return (
    <div className="h-[100vh]">
      <Navbar />
      {!loadingAulas && aula ? (
        <div className="p-7 h-full flex flex-col">
          <h1 className="text-2xl border-b border-slate-200 inline-flex">
            {aula?.titulo_aula}
          </h1>
          <section className="flex flex-col grow m-2 items-stretch justify-center">
            <iframe
              className="w-full h-full flex items-center justify-center grow"
              src={`https://www.youtube.com/embed/${aula?.url_aula}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </section>
          Descrição:
          <div className="inline-flex justify-between w-[100%]">
            <div className="flex grow p-2 w-auto border border-slate-200">
              {aula?.descricao_aula}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-[50vh] justify-center items-center">
          <p className="loader"></p>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Aula
