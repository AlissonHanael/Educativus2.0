import React from 'react'
import { Link } from 'react-router-dom'

const HomeSectionAcess = props => {
  return (
    <section className="alter-acess h-[50vh] flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2">
        <img
          className="w-full flex justify-center overflow-hidden object-cover h-full"
          src={props.logo}
        />
      </div>
      <div className="bg-slate-400 border divide-y divide-slate-400 sm:divide-x"></div>
      <div id="text" className="w-full flex flex-col items-center sm:w-1/2">
        <h2 className="w-full flex items-center justify-center text-center text-5xl mt-5 mb-5">
          Acesse os treinamentos!
        </h2>
        <p className="p-4 text-center">
          São diversos treinamentos selecionados e gravados!
          <p>E agora também contamos com a Biblioteca! </p>
        </p>

        <Link
          to="/treinamentos"
          className="p-2 w-[12.5rem] mb-1 text-center border bg-red-600  font-bold text-white rounded hover:bg-red-400"
        >
          Assista agora
        </Link>
        <Link
          to="/manuais"
          className="p-2 w-[12.5rem] text-center border bg-red-600  font-bold text-white rounded hover:bg-red-400"
        >
          Acesse os Manuais
        </Link>
      </div>
    </section>
  )
}

export default HomeSectionAcess
