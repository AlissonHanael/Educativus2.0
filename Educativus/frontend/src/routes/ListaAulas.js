import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CardSection } from '../components/CardSection'
const Sap = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="Treinamentos" />
      <CardSection />
      <Footer />
    </div>
  )
}

export default Sap
