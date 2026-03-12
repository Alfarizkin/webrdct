import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './features/homepage/Homepage'
import Gallery from './features/gallery/Gallery'
import EBPage from './features/product/ebpage/EBPage'

function App() {
  return (
    <>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/echoes-beneath' element={<EBPage />}/>
        </Routes>

      </div>
    </>
  )
}

export default App