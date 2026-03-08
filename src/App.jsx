import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './features/Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          
        </Routes>
      </div>
    </>
  )
}

export default App
