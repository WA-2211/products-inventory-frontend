import React from 'react'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import CreateProduct from './pages/CreateProduct'
import ProductDetails from './pages/ProductDetails'
import UpdateProduct from './pages/UpdateProduct'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/products' element={< AllProducts/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/products/create' element={<CreateProduct/>}></Route>
        <Route path='/products/:id/edit' element={<UpdateProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default App