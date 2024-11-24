import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./data";
import Product from "./Product";
import 'react-toastify/dist/ReactToastify.css';


const ProductDetailed = () => {

  


  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((p) => p.id == id);

    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );

    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  return (
    <>


      <div>
      <Link
        to="/"
        className="text-white w-99 relative left-14 top-3  bg-slate-500 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
       >  Go Back   </Link>
      </div>

      <div className="Box">

        <div className="sub-Box">
          <img  src={product.img} alt="content" />
        </div>
        <div>
          <div className="mt-10 font-bold text-blue-500 h-12 text-3xl">
            {product.title}
          </div>
          <div className="text-slate-600 text-sm">
            {product.description}...This is an Exiting Product....
          </div>
          <div className="flex relative top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5" > <path
             fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clipRule="evenodd" />  </svg>  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5" ><path fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clipRule="evenodd" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5" > <path
                fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clipRule="evenodd" /> </svg>  <svg    xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"  fill="currentColor"  className="size-5">  <path
                fillRule="evenodd"
                d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                clipRule="evenodd" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"  className="size-5"  >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              /> </svg> </div>
        <div className="flex">
          <Link
            to="/Register"
            className="text-white w-99 relative top-8  bg-blue-500 hover:bg-slate-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Buy Now
            
          </Link>
          <div className="text-sm relative left-7 top-7 text-white bg-slate-500 h-7 w-20 rounded-xl px-3 py-1 mt-2">
                {product.price}
          </div>
          </div>  
        </div>


      </div>


      <div className="flex  justify-center mt-4 space-x-16 ">
        <div className="text-slate-600 text-2xl relative right-14 font-bold">
          Find New Related Products
        </div>
      </div>
      <div className="h-1 w-28 border-b-2 rounded-xl min-[200px]:relative left-28 mt-1  md:relative md:left-1/3 md:ml-28 md:mt-2  bg-orange-500"></div>
      <Product items={relatedProducts} />

    </>
  );
};

export default ProductDetailed;
