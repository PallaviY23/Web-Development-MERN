import React from 'react'
import { Link } from "react-router-dom";

const Favourites = ({favourites,setFavourites}) => {
  return (
    <>
      
      <div className="container my-6">
        {
          favourites.length==0?(
           <div className="text-center">
            <h1 className="text-blue-500 text-center text-3xl font-bold mb-3 pt-8">Your Favourites are Empty</h1>
            <Link className="text-white w-99   bg-slate-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2.5 lg:py-2.5 mr-2 focus:outline-none" to={"/shop"}>Continue Shopping...</Link>
           </div> 
          ):
        favourites.map((product) => {
          return (
            <>
              <div className="card shadow-md ml-32 mb-3 my-5" style={{ width: "60%" }}>
                <div className="row p-4 g-0">
                  <div className="col-md-4">
                    <img  src={product.img} className="bg-blue-300 h-44 img-fluid rounded-start"  alt="content"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="text-xl text-blue-500 text-center font-bold title-font  mt-3.5">{product.title}</h5>
                      <p className="text-center my-2 text-slate-500">
                        {product.description}
                      </p>
                      <div className="ml-32 mt-2 flex gap-7">
                      <Link to={'/Register'}
                        className="text-white w-99   bg-blue-500 hover:bg-slate-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2.5 lg:py-2.5 mr-2 focus:outline-none"
                      >
                        Buy Now
                      </Link>
                      <div className="text-sm text-center  text-white bg-slate-500 h-7 w-20 rounded-xl py-1 mb-2 mt-2">
                                {product.price}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}


       

      </div>

      {
          favourites.length !=0 && (
            <div className="flex justify-center gap-2 mb-5">
            <Link to={"/"} className="text-white w-99    bg-slate-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2.5 lg:py-2.5 mr-2 focus:outline-none">
              Checkout
            </Link>
            <button className="text-white w-99   bg-blue-500  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2.5 lg:py-2.5 mr-2 focus:outline-none" onClick={()=>setFavourites("") }>
              Clear All Favourites
            </button>
          </div>
          )
        }

    </>
  )
}

export default Favourites
