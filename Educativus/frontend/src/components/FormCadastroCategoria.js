import React, { useState } from 'react'
import api from '../services/api'

import './FormCadastroCategoria.css'

const FormCadastroCategoria = () => {
  const token = localStorage.getItem('token')
  const errorMessage = document.getElementById('error-message')
  const sucessMessage = document.getElementById('sucess-message')
  const [nome, setNome] = useState('')
  const [imagemCategoria, setImagemCategoria] = useState(null)

  const handleFileChange = event => {
    console.log(event.target.files[0])
    setImagemCategoria(event.target.files[0])
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let fData = new FormData()
    fData.append('nome_categoria', nome)
    fData.append('imagem_categoria', imagemCategoria)

    try {
      const response = await api.post('api/categoria', fData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Token ' + token
        }
      })

      if (response.status === 201) {
        sucessMessage.classList.remove('hidden')
        sucessMessage.innerHTML = 'Cadastro efetuado com sucesso'
        setTimeout(function () {
          window.location.reload(true)
        }, 3000)
      }
      console.log(response)
    } catch (err) {
      errorMessage.classList.remove('hidden')
      errorMessage.innerHTML = err.message
    }
  }

  return (
    <div className="container">
      <form
        className="w-auto m-5 p-2 border rounded grow"
        onSubmit={handleSubmit}
      >
        <label htmlFor="categoria" className="">
          Nome da Categoria
        </label>
        <input
          required
          className="w-full p-2 border rounded border-slate-400 mb-2"
          id="categoria"
          type="text"
          placeholder="Digite o nome da categoria..."
          onChange={e => setNome(e.target.value)}
        ></input>
        <input
          required
          className="w-full p-2 border rounded border-slate-400 mb-2"
          id="categoria"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        ></input>
        <div className="flex justify-center flex-col items-center">
          <input
            type="submit"
            className="w-[50%] h-10 mt-2 rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            value="Salvar"
          ></input>
          <div
            className="border mt-2 border-red-500 p-2 rounded bg-red-300 hidden"
            id="error-message"
          ></div>
          <div
            className="border  mt-2 border-green-500 p-2 rounded bg-green-300 text-center hidden"
            id="sucess-message"
          ></div>
        </div>
      </form>
    </div>
  )
}

export default FormCadastroCategoria
