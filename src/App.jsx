
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'
import Navbar from './components/Navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Mens from './components/Mens/Mens.jsx'
import Women from './components/Women/Women.jsx'
import Kids from './components/Kids/Kids.jsx'
import Cart from './components/cart/cart.jsx'

//import Sidebar from './hooks/Sidebar.js'



function App() {


  return (
    <>
     
      <BrowserRouter >
     
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/mens" element={<Mens/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
      <Footer/>
      
    </BrowserRouter>

   


    </>
  )
}

export default App
