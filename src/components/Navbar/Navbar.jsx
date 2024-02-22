import React from 'react'
import './Navbar.css'
import '../../index.css'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import adid from '../../images/adidasSVG01.svg'
import bag from '../../images/bag.svg'
    

 const Navbar = () => {
      const [menuOpen, setMenuOpen] = useState(false);

      return (
        <>
        <nav className="palet">
          <Link to="/" className="title logo">
            <img src={adid} alt="" />
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen) }>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li className="px-6">
              <NavLink to="/mens">Mens</NavLink>
            </li>
            <li className="px-6">
              <NavLink to="/women">Women</NavLink>
            </li>
            <li className="px-6">
              <NavLink to="/kids">Kids</NavLink>
            </li>
          </ul>

      
       <div className="cart">
         <Link to="/cart">
           <img className='search' src={bag} alt="" />
       </Link>
       </div>

   
    </nav>

    </>
  );
};

export default Navbar;