import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-cream'>
      <Navbar/>
      <Home/>
      <About/>
     </div>
        
    </>
  )
}

export default App
