import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './features/homepage/Homepage'

function App() {
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