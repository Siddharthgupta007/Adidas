import React from 'react'
import './Mens.css'
import Images from '../ImagesMen'
import Card from '../Cards/Cards'
import useFetch from '../../hooks/useFetch'
import shoe from '../../images/shoe02.png'
import '../Hero/Hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'





function Mens() {

  const menShoes =
    [
      { name: "airforce-1", price: "12000", img: Images.m1 },
      { name: "Killshot-2", price: "12500", img: Images.m2 },
      { name: "Killshot 2 leather", price: "13000", img: Images.m3 },
      { name: "airforce-1-07", price: "14000", img: Images.m4 },


    ]

  const { loading, error, data } = useFetch('http://localhost:1337/api/mens-products?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error..</p>

  console.log(data);
  return (


    <section className="container">

      <div className="mainhero">



        



        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Gazzeti's</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">

          
            <div className="sellcard "> 
              <div class="w-5/5 h-96 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img class="py-0 px-12 rounded-t-lg" src={shoe03} alt="product image" />
                </a>
               
                <div class="px-5 pb-5">
                 
                  <div class="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti White</h1>
                  
                  <a href="#" target="_blank"
                    class="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sellcard "> 
              <div class="w-5/5 h-96 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img class="py-0 px-12 rounded-t-lg" src={shoe02} alt="product image" />
                </a>
               
                <div class="px-5 pb-5">
                 
                  <div class="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti White</h1>
                  
                  <a href="#" target="_blank"
                    class="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sellcard "> 
              <div class="w-5/5 rounded-3xl shadow-2xl bg-slate-200">
                <a href="#">
                  <img class="py-0 px-12 rounded-t-lg" src={shoe03} alt="product image" />
                </a>
               
                <div class="px-5 pb-5">
                 
                  <div class="flex flex-col gap-7 items-center justify-center">
                    <h1>Gazzeti White</h1>
                  
                  <a href="#" target="_blank"
                    className="secon-btn transit">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>
            
          
            
        </div>



        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sneakers</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.subcategory === "sneakers").map(prod => (
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

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sports Shoes</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.subcategory === "sports").map(prod => (
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

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Shirts</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.subcategory === "shirts").map(prod => (
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
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Pants</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.subcategory === "pants").map(prod => (
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
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Caps</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.subcategory === "caps").map(prod => (
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

       
        
      </div>

    </section>


  )

}

export default Mens