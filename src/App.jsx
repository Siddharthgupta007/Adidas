
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './components/Hero/Hero.jsx'
import Mens from './components/Mens/Mens.jsx'
import Women from './components/Women/Women.jsx'
import Kids from './components/Kids/Kids.jsx'
import Cart from './components/Cart/Cart.jsx'
import ProDetails from './components/Cards/ProDetails.jsx'



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
        <Route path="/productdetails/:id" element={<ProDetails/>} />
      </Routes>
      
      <Footer/>
      
    </BrowserRouter>

    </>
  )
}

export default App
