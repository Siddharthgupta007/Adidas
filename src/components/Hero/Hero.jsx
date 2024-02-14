import React from 'react'
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import shoe from '../../images/shoe02.png'
import './hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'
import video from '../../images/ad01.mp4'
import bigadidas from '../../images/addidasSVG.svg'
import useFetch from '../../hooks/useFetch'



// // Import useSWR from swr package

// // created function to handle API request
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const Hero = () => {
//   const {
//     data: product,
//     error,
//     isValidating,
//   } = useSWR("http://localhost:1337/api/products?populate=*", fetcher);

//   // Handles error and loading state
//   if (error) return <div className='failed'>failed to load</div>;
//   if (isValidating) return <div className="Loading">Loading...</div>;

//   return (
//     <div>
//       {product &
//         product.map((prod, index) => (
//           <img key={index} src={prod.attributes.image.data.attributes.formats.thumbnail.url} alt='flag' width={100} />
//         ))}
//     </div>
//   );
// };

// export default Hero;





const Hero = () => {




  const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=*')

  if (loading) return <p>Loading...</p>
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
            <span className=" palet">Collection</span>
          </h1>
          
          </div>
       
      </section>


      <div className="collectionCard">
        <section class="projects">
          <div class="contain-project">
            <div class="container flex proj">

              <div className="project-card bg-slate-200 shadow-2xl rounded-3xl gaz">
                <a href="#"><img src={shoe} alt="" /></a>
                <p> Gazzeti Yellow</p>
                <p> </p>
                <a href="#" target="_blank"
                  class="secon-btn transit">Add to Cart</a>
              </div>
              {/* other local cards of shoe */}
              <div class="project-card  bg-slate-200 shadow-2xl rounded-3xl">

                <a href="#"><img src={shoe02} alt="" /></a>
                <p> Gazzeti White</p>
                <p> </p>
                <a href="#" target="_blank"
                  class="secon-btn transit">Add to Cart</a>
              </div>

              <div class="project-card  bg-slate-200 shadow-2xl rounded-3xl">

                <a href="#"><img src={shoe03} alt="" /></a>
                <p> Gazzeti Yellow</p>
                <p> </p>
                <a href="#" target="_blank"
                  class="secon-btn transit">Add to Cart</a>
              </div>

            </div>
          </div>
        </section>

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
        {/* <h2 className='container'>Latest Gazzetti Sneakers collection</h2> */}

        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div class="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
                  <a href="#">
                    <img class="p-8 rounded-t-lg" src={`http://localhost:1337${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" class="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>


        {/* tailblocks cards */}






      </div>
    </div>
  )
}

export default Hero



