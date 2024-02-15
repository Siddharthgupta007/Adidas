import React from "react";
function Card({shoename,price,img})
{
    return(
        <div className="card  bg-yellow-500 shadow-xl m-auto text-black w-80 mb-4">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{shoename}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        </div>
    )

}
export default Card