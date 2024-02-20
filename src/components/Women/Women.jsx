import React from 'react'
import useFetch from '../../hooks/useFetch'

const Women = () => {

	

  const { loading, error, data } = useFetch(import.meta.env.VITE_API_URL_LOCAL+'/api/women-products?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error..</p>

  console.log(data);
  return (
    
	
	<section>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-14">Sneakers</h1>
    <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
          {data.data.filter((prod)=> (prod.attributes.Category === "women" && prod.attributes.subcategory === "sneaker")).map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet  ">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={ import.meta.env.VITE_API_URL_LOCAL +`${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75 ">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

		<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-24 ">Sports</h1>
    <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
          {data.data.filter((prod)=> (prod.attributes.Category === "women" && prod.attributes.subcategory === "sports")).map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={ import.meta.env.VITE_API_URL_LOCAL +`${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>



        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-24 ">Tshirts</h1>
    <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
          {data.data.filter((prod)=> (prod.attributes.Category === "women" && prod.attributes.subcategory === "tops")).map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={ import.meta.env.VITE_API_URL_LOCAL +`${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
            

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-24 ">Dresses</h1>
    <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
          {data.data.filter((prod)=> (prod.attributes.Category === "women" && prod.attributes.subcategory === "dress")).map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={import.meta.env.VITE_API_URL_LOCAL +`${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>


        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl text-center py-14">Skirts</h1>
        <div className=" mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center container">
          {data.data.filter((prod)=> (prod.attributes.Category === "women" && prod.attributes.subcategory === "skirts")).map(prod => (
            <div key={prod.id} className="">
              <div className="sellcard">


                <div className="w-5/5 max-w-lg bg-white border border-gray-200 rounded-lg shadow-2xl palet  ">
                  <a href="#">
                    <img className="p-8 rounded-t-lg" src={import.meta.env.VITE_API_URL_LOCAL +`${prod.attributes.image.data.attributes.url}`} alt="product image" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{prod.attributes.Title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{prod.attributes.Price + '$'}</span>
                      <a href="#" className="text-owhite bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center owhite dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-95 duration-75 ">Add to cart</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>


        
	</section>
  )
}

export default Women