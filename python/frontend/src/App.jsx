import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddProd from './components/AddProd'
import SearchProd from './components/SearchProd'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Product Dashboard</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <AddProd/>
            </div>
            <div className='col-md-4'>
            <SearchProd/>
            </div>
          </div>
          <div className='row'>
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
