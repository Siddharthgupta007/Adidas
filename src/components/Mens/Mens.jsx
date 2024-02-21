import React from 'react'
import './Mens.css'
import Images from '../ImagesMen'
import useFetch from '../../hooks/useFetch'
import '../Hero/Hero.css'
import '../../index.css'
import shoe02 from '../../images/shoe4.png'
import shoe03 from '../../images/shoe3.png'





function Mens() {
  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL+'/api/mens-products?populate=*')

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


    <section className="container">

      <div className="mainhero">



        



        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Gazzeti's</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">

          
        <div className="sellcard "> 
              <div className="w-5/5 rounded-3xl shadow-2xl bg-slate-200">
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
              <div className="w-5/5 rounded-3xl shadow-2xl bg-slate-200">
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
              <div className="w-5/5 rounded-3xl shadow-2xl bg-slate-200">
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
  
  
       


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sneakers</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "sneaker").map(prod => (  
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
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

       <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Sports Shoes</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "sportshoe").map(prod => (
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
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Shirts</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "tshirt").map(prod => (
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
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div> 
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Pants</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "pant").map(prod => (
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
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div> 
      
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-16">Caps</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center">
          {data.data.filter((prod) => prod.attributes.Subcategory === "caps").map(prod => (
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
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75">Add to cart</a>
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