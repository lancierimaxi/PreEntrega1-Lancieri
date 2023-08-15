import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import Cart from'./components/Cart'
import DetailContainer from './components/DetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>  
    {/*<ItemListContainer/>
      <ItemDetailContainer/>*/}
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/product/:id" element={<DetailContainer/>}/>
      <Route exact path="/category/:category" element={<ItemListContainer/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
