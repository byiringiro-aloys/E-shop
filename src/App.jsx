import { useState } from 'react'
import Header from './sections/Header'
import './App.css'
import Hero from './sections/Hero'
import Category from './sections/Category'
import Types from './sections/Types'
import Services from './sections/Services'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <Types/>
    <Services />

    </>
  )
}

export default App
