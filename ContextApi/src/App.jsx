import React, { useContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { userDataContext } from './Context/UserContext'
import Section from './Components/Section'

const App = () => {

  const data = useContext(userDataContext)
  
  return (
    <div>
      <Navbar>
        <h1 className='text-3xl uppercase'>Jai Shree Ram</h1>
        <h2>Radhe Radhe</h2>
      </Navbar>
      <Section />
      <Footer />
    </div>
  )
}

export default App
