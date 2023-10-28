import React, { useState, useEffect } from 'react'
import api from '../services/api'
import headers from '../services/headers'
import './FormCadastroAula.css'

const FormCadastroManual = () => {
  const errorMessage = document.getElementById('error-message')
  const sucessMessage = document.getElementById('sucess-message')
  const token = localStorage.getItem('token')
  const [arquivo, setArquivo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [titulo, setTitulo] = useState('')
  const [categoria_id, setCategoria_id] = useState('')
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState('')
  const returnHeaders = headers()

  const urlAtual = window.location.href
  const urlEdicao = urlAtual.split('/')
  const idEdicao = urlEdicao[5]

  const [fetchedData, setFetchedData] = useState({})

  const handleFileChange = event => {
    console.log(event.target.files[0])
    setArquivo(event.target.files[0])
  }

  useEffect(() => {
    async function fetchedData() {
      if (parseInt(idEdicao) > 0) {
        const res = await api.get(`/api/manuais/${idEdicao}/`)
        console.warn(res.data)
        setFetchedData(res.data)
      }
    }
    fetchedData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/api/categoria')
      setOptions(res.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (idEdicao && fetchedData) {
      setTitulo(fetchedData.titulo_pdf)
      setCategoria_id(fetchedData.categoria_pdf)
      setDescricao(fetchedData.descricao_pdf)
    }
  }, [idEdicao, fetchedData])

  async function handleChange(event) {
    setSelectedOption(event.target.value)
    setCategoria_id(event.target.value)
  }

  async function HandleChangeStates(useState, string) {
    useState(string)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    let fData = new FormData()
    fData.append('titulo_pdf', titulo)
    if (!idEdicao) {
      fData.append('pdf_file', arquivo)
    }
    fData.append('descricao_pdf', descricao)
    fData.append('categoria_pdf', categoria_id)

    if (!idEdicao) {
      try {
        const response = await api.post('api/manuais/', fData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Token ' + token
          }
        })
        console.log(response)
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
        setTimeout(function () {
          // window.location.reload(true)
        }, 3000)
      }
    } else {
      try {
        const response = await api.put(`api/manuais/${idEdicao}/`, fData, {
          headers: returnHeaders
        })
        console.log(response)
        if (response.status === 201 || response.status === 200) {
          sucessMessage.classList.remove('hidden')
          sucessMessage.innerHTML = 'Atualizado com sucesso'
          setTimeout(function () {
            window.location.reload(true)
          }, 3000)
        }
        console.log(response)
      } catch (err) {
        errorMessage.classList.remove('hidden')
        errorMessage.innerHTML = err.message
        setTimeout(function () {
          window.location.reload(true)
        }, 3000)
      }
    }
  }

  return (
    <div className="container">
      <form
        className="w-auto m-5 p-2 border rounded grow"
        onSubmit={handleSubmit}
      >
        <label htmlFor="titulo" className="">
          Título do Manual
        </label>
        <input
          required
          className="w-full p-2 border rounded border-slate-400"
          id="titulo"
          type="text"
          placeholder="Digite o título..."
          onChange={e => HandleChangeStates(setTitulo, e.target.value)}
          value={titulo}
        ></input>
        <label htmlFor="categoria" className="">
          Arquivo em PDF
        </label>
        <input
          required={!idEdicao}
          className="w-full p-2 border rounded border-slate-400 mb-2"
          id="categoria"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          disabled={idEdicao}
        ></input>
        <label htmlFor="categoria" className="">
          Descrição do Manual
        </label>
        <textarea
          required
          className="w-full p-2 border rounded border-slate-400"
          id="descricao"
          type="text"
          placeholder="Insira uma descrição..."
          onChange={e => setDescricao(e.target.value)}
          value={descricao}
        ></textarea>
        <label htmlFor="categoria" className="">
          Categoria
        </label>
        <div className="relative p-2">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={
              categoria_id !== ''
                ? categoria_id
                : fetchedData.categoria_pdf || ''
            }
            onChange={handleChange}
          >
            <option key="" value="" disabled>
              Selecione uma categoria
            </option>
            {options.map((option, id) => (
              <option key={id} value={option.id}>
                {option.nome_categoria}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <input
            type="submit"
            className="w-auto h-10 rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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

export default FormCadastroManual
