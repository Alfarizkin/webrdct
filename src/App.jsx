import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './features/homepage/Homepage'
import Gallery from './features/gallery/Gallery'
import EBPage from './features/product/ebpage/EBPage'
import ScrollToTop from './shared/hooks/ScrollToTop'
import Products from './features/product/products/Products'

function App() {
  return (
    <>
      <div className='app-container'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/echoes-beneath' element={<EBPage />}/>
        </Routes>

      </div>
    </>
  )
}

export default App