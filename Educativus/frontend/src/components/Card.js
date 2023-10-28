import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import api from '../services/api'
const Card = props => {
  const [categoria, setCategoria] = useState([])
  const navigate = useNavigate()

  async function getCategoria() {
    try {
      const res = await api.get(`/api/categoria/${props.category}/`)
      setCategoria(res.data)
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    getCategoria()
  }, [])

  function downloadFile(manuais) {
    // Aqui você pode implementar a lógica para iniciar o download
    // Por exemplo, criar um link <a> temporário e clicá-lo programaticamente

    const link = document.createElement('a')
    link.href = manuais // Defina a URL do arquivo aqui
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  function irPara() {
    if (`${props.buttonText}` === 'Download') {
      downloadFile(`${props.url}`)
    } else {
      navigate(`/aula/${props.url}`)
    }
  }

  return (
    <div className="card p-2">
      <div className="w-60 h-72 p-3 bg-[#F2F2F2] rounded relative overflow-visible shadow shadow-black flex flex-col justify-between">
        <div className=" h-2/5 flex rounded w-full ">
          <img
            alt={categoria.nome_categoria}
            className="object-contain items-center justify-center"
            src={categoria.imagem_categoria}
          />
        </div>
        <div className="flex h-50 flex-col flex-1">
          <div className="pt-[10%]">
            <p className="font-light text-lg overflow-hidden">{props.title}</p>
          </div>
        </div>
        <button
          onClick={irPara}
          className=" h-[2.5rem] rounded bg-[#F32424] text-white font-bold"
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}

export default Card
