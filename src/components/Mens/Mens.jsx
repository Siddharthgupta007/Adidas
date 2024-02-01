import React from 'react'
import './Mens.css'
import Images from '../ImagesMen'
import Card from '../Cards/Cards'



function Mens() {

  const menShoes =
[
    {name:"airforce-1",price:"12000",img:Images.m1},
    {name:"Killshot-2",price:"12500",img:Images.m2},
{name:"Killshot 2 leather",price:"13000",img:Images.m3},
 {name:"airforce-1-07",price:"14000",img:Images.m4},
  
    
]
  return (

    <>
    
    <div className="flex flex-wrap gap-3 m-auto mt-16 mb-16 justify-center lg:w-[100vw] sm:w-[75vw] ">
        
        {menShoes.map((shoe)=>
        {
            return(
                <Card shoename={shoe.name} price={shoe.price} img={shoe.img}/>
            )
        })}
        
    </div>
    </>
  )
        {/* <ul className='flex'>
          <li>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </li>
        </ul> */}
  
}

export default Mens