
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Mens from './components/Mens/Mens'
import Women from './components/Women/Women'
import Kids from './components/Kids/Kids'
import Cart from './components/Cart/Cart'




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
