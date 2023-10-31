import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AddProducts from './addProductForm/AddProducts'


function App() {
  return (<>
    <ul>
      
      <li><Link to='/addproducts'>Add product</Link></li>
     


    </ul>

    <Routes>
      
        <Route path='/addproducts' element={<AddProducts/>} />
    
        
    </Routes>


  </>
  )
}

export default App