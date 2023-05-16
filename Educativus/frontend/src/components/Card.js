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

  function irPara() {
    navigate(`/aula/${props.url}`)
  }

  return (
    <div className="card flex-1 p-2">
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
            <p className="font-light text-lg overflow-hidden">
              {props.category}
              {categoria.nome_categoria}
            </p>
          </div>
        </div>
        <button
          onClick={irPara}
          className=" h-[2.5rem] rounded bg-[#F32424] text-white font-bold"
        >
          Assistir
        </button>
      </div>
    </div>
  )
}

export default Card
