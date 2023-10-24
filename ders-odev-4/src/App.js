import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddProductPage from './pages/AddProductPage'
import ProductsListPage from './pages/ProductsListPage'

function App() {
  return (
  <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/AddProductPage'>AddProductPage</Link></li>
      <li><Link to='/ProductsListPage'>ProductsListPage</Link></li>

    </ul>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/AddProductPage' element={<AddProductPage/>} />
        <Route path='/ProductsListPage' element={<ProductsListPage/>} />
       


    </Routes>
  </>
  )


}

export default App