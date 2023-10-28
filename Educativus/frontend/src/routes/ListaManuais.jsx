import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CardSectionManual } from '../components/CardSectionManual'
const ListaManuais = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Manuais" />
      <CardSectionManual />
      <Footer />
    </div>
  )
}

export default ListaManuais
