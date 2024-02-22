import React from 'react'
import { useState } from 'react'
import './Hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'
import video from '../../images/ad01.mp4'
import bigadidas from '../../images/addidasSVG.svg'
import useFetch from '../../hooks/useFetch'
import Card from '../Cards/Cards'


const Hero = () => {

  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL+'/api/mens-products?populate=*')
  const [Key, setkey] = useState("");
  const [Url, setUrl] = useState("");
  const [Title, setTitle] = useState("");
  const [Price, setPrice] = useState("");



 if (loading) return <div class="text-center py-6">
  <div role="status">
      <svg aria-hidden="true" class="inline w-8 h-8 text-white-200 animate-spin  fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
  </div>
  </div>
  if (error) return <p>Error..</p>

  console.log(data);



  return (

    <div className="hero container">
      <div className="homeimage">
        <div className="videoDiv ">
          <img className="adidassvg flex items-center justify-center w-100" src={bigadidas} alt="" />
          {/* add "autplay in the video propertise to play video in loop " */}
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
      </div>

      <section className="">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">Premium Gazzeti_
            <span className=" palet rounded-2xl ">Collection</span>
          </h1>
          
          </div>
       
      </section>


     
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">        
        <div className="sellcard"> 
              <div className=" animini w-5/5 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img className="py-0 px-12 rounded-t-lg" src={shoe03} alt="product image" />
                </a>
               
                <div className="px-5 pb-5">
                 
                  <div className="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti Blue</h1>
                  
                  <a href="#" target="_blank"
                    className="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sellcard "> 
              <div className="animini w-5/5 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img className="py-0 px-12 rounded-t-lg" src={shoe02} alt="product image" />
                </a>
               
                <div className="px-5 pb-5">
                 
                  <div className="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti grey</h1>
                  
                  <a href="#" target="_blank"
                    className="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sellcard "> 
              <div className=" animini w-5/5 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img className="py-0 px-12 rounded-t-lg" src={shoe03} alt="product image" />
                </a>
               
                <div className="px-5 pb-5">
                 
                  <div className="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti White</h1>
                  
                  <a href="#" target="_blank"
                    className="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            
          
            
        </div>

      <div className="p-6 py-12 dark:text-gray-900 sale">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracki font-bold">Up to
              <br className="sm:hidden" />50% Off
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

        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
                  <a href="#">
                    
                    <img className="p-8 rounded-t-lg" src={prod.attributes.Image.data.attributes.url} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Hero



