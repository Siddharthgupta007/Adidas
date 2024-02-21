import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'
import '../../index.css'
import adid from '../../images/adidasSVG01.svg'
import bag from '../../images/bag.svg'





const Navbar = () => {
    return (

        <>
            <header className="palet sticky top-0 z-10">
                <div className="Navbar container">



                    <ul className='flex navbar'>

                        <div className="nav-left">
                            <Link to="/">
                                <img src={adid} alt="" />
                            </Link>

                        </div>


                        <div className="flex navbar-middle">

                            <div className="men nav-middle gap">
                                <Link className='hov' to="/mens">Mens</Link>
                            </div>

                            <div className="Women nav-middle gap">
                                <Link className='hov' to="/women">Women</Link>
                            </div>

                            <div className="kids nav-middle gap">
                                <Link className='hov' to="/kids">Kids</Link>
                            </div>

                        </div>

                        <div className="nav-right">
                            <Link to="/cart">
                                <img className='search' src={bag} alt="" />
                            </Link>

                        </div>
                    </ul>

                    {/* hjgjhgfjhjhvghjc */}

                </div>





            </header>

        </>

    )
}

export default Navbar





