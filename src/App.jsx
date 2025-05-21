import { useState } from 'react'
import Header from './sections/Header'
import './App.css'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Types from './sections/Types'
import Services from './sections/Services'
import Productsgrid from './sections/Productsgrid'
import Banner from './sections/Banner'
import Review from './sections/Review'
import Insta from './sections/Insta'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <Types/>
    <Services />
    <Productsgrid />
    <Banner />
    <Review />
    <Insta />
    <Footer />

    </>
  )
}

export default App
