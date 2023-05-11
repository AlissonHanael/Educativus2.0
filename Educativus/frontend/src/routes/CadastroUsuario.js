import React, { useState } from 'react'
import api from '../services/api'
import headers from '../services/headers'
import Logo from '../assets/Ativus.png'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const CadastroUsuario = () => {
  const errorMessage = document.getElementById('error-message')
  const sucessMessage = document.getElementById('sucess-message')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const returnHeaders = headers()
  const is_staff = true

  async function handleSubmit(e) {
    e.preventDefault()
    if (email.length === 0) {
      alert('O email não pode ficar em branco.')
      return 0
    } else if (password.length === 0) {
      alert('A senha não pode ficar em branco.')
    } else if (confirmPassword.length === 0) {
      alert('Confirme a senha.')
    } else {
      if (password === confirmPassword) {
        let fData = new FormData()
        fData.append('username', username)
        fData.append('email', email)
        fData.append('password', password)
        fData.append('is_staff', is_staff)

        try {
          const response = await api.post('api/register/', fData, {
            headers: returnHeaders
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
          setTimeout(function () {
            window.location.reload(true)
          }, 3000)
        }
      }
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="w-auto h-30 mx-auto" src={Logo} alt="Logo Ativus" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Iniciar Sessão
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Nome
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Nome de usuário"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="E-mail"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Senha"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Confirme sua Senha"
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-red-100 group-hover:text-red-900"
                    aria-hidden="true"
                  />
                </span>
                Entrar
              </button>
            </div>
            <div
              className="border mt-2 border-red-500 p-2 rounded bg-red-300 hidden"
              id="error-message"
            ></div>
            <div
              className="border  mt-2 border-green-500 p-2 rounded bg-green-300 text-center hidden"
              id="sucess-message"
            ></div>
          </form>
          <Link className="flex content-center justify-center" to="/">
            Voltar ao início
          </Link>
        </div>
      </div>
    </>
  )
}

export default CadastroUsuario
