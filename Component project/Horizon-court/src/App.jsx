import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import AboutSection from './Components/AboutSection'
import Section2 from './Components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-6 h-screen'>
      <Navbar />
      <Section />
      <AboutSection />
      <Section2 />
    </div>
  )
}

export default App
