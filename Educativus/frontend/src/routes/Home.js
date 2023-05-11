import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import HomeSection from '../components/HomeSection'
import HomeSectionReverse from '../components/HomeSectionReverse'
import HomeSectionAcess from '../components/HomeSectionAcess'
import Footer from '../components/Footer'
import SapLogo from '../assets/sap_logo.png'
import AtivusCargasLogo from '../assets/ativuscargas.png'
import Study from '../assets/study.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Tutoriais Exclusivos" text="Multi empresarial" />
      <HomeSection
        logo={SapLogo}
        title="O que é a SAP?"
        aboutText="A SAP é um dos líderes mundiais de desenvolvimento de softwares para
            gerenciamento de processos de negócios, criando soluções que
            facilitam o processamento efetivo de dados e o fluxo de informações
            entre as organizações. Fundada em 1972, a empresa foi inicialmente
            chamada de System Analysis Program Development (Systemanalysis
            Programmentwicklung), mais tarde consolidada na sigla SAP. Desde
            então, cresceu de um pequeno esforço de cinco pessoas para uma
            empresa multinacional com sede em Walldorf, Alemanha, com mais de
            105.000 colaboradores em todo o mundo."
      />
      <HomeSectionReverse
        logo={AtivusCargasLogo}
        title="O que é o Ativus Cargas?"
        aboutText="Desenvolvido na ativus a aplicação ativus cargas se comunica com o SAP via API trazendo as informações de entradas e saídas das empresas e preparando as mesmas para receber automação."
      />
      <HomeSectionAcess logo={Study} />
      <Footer />
    </div>
  )
}

export default Home
