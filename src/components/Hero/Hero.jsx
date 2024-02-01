import React from 'react'
import shoe from '../../images/shoe02.png'
import './hero.css'
import '../../index.css'
 import { motion } from "framer-motion"
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'
import video from '../../images/ad01.mp4'
import bigadidas from '../../images/logo01.svg'

const Hero = () => {
  return (


<div className="hero container">

     
    <div className="homeimage">
      <div className="videoDiv ">
      <img className='adidas' src={bigadidas} alt="" />
      <video src= {video} autoPlay muted loop  className='video'></video>
      </div>
    </div>

    {/* <div className="flex">
     <div className="hero-left container">
        <h1>All In</h1>
        <h1>Or</h1>
        <h1>nothing</h1>
     </div>

     <motion.div 
    
    whileHover={{ scale: 1, rotate:30 }}
  whileTap={{
    scale: 0.8,
    rotate: -30,
    borderRadius: "100%"
  }}
    
    className="hero-right container">
       <img className="transit" src={shoe} alt="" />
     </motion.div>

    </div> */}

<div className="p-6 py-12 dark:text-gray-900 sale">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracki font-bold">Up to
				<br  className="sm:hidden" />50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">MAMBA</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
		</div>
	</div>
</div>

    <div className="mainhero">

        <div className="header">
           <h2>Latest Gazzetti Sneakers collection</h2>
        </div>
   
         <div className="collectionCard">
            

         <section class="projects">
        <div class="contain-project">
           

            <div class="container flex proj">


                <div class="project-card">
                   
                    <a href="#"><img src={shoe} alt=""/></a>
                    <p> Gazzeti Yellow</p>
                    <p> </p>
                    <a href="#" target="_blank"
                        class="secon-btn transit">Add to Cart</a>
                </div>
                <div class="project-card">
                   
                   <a href="#"><img src={shoe02} alt=""/></a>
                   <p> Gazzeti White</p>
                   <p> </p>
                   <a href="#" target="_blank"
                       class="secon-btn transit">Add to Cart</a>
               </div>

               <div class="project-card">
                   
                   <a href="#"><img src={shoe03} alt=""/></a>
                   <p> Gazzeti Yellow</p>
                   <p> </p>
                   <a href="#" target="_blank"  
                       class="secon-btn transit">Add to Cart</a>
               </div>

            </div>
        </div>
    </section>

    </div>

    {/* <div className="flex">
     <div className="hero-left container">
        <h1>All In</h1>
        <h1>Or</h1>
        <h1>nothing</h1>
     </div>

   <motion.div 
    
    whileHover={{ scale: 1, rotate:30 }}
  whileTap={{
    scale: 0.8,
    rotate: -30,
    borderRadius: "100%"
  }}
    
    className="hero-right container">
       <img className="transit" src={shoe} alt="" />
    </motion.div>

    </div> */}
    </div>
</div>
  )
}

export default Hero