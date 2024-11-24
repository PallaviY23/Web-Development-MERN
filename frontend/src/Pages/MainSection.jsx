import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>




      {/* Here it is the Header hearing part */}
    <div className="relative bottom-12">
      <div className="p-1  pb-1 mt-2 ">
        <div className="text-orange-500 text-center text-3xl font-bold pt-8">
          Welcome To our Ecommerce Platform!
        </div>
        <p className="text-slate-600 pt-2 text-sm text-center">
          Explore a diverse selection of high-quality products and exclusive
          deals tailored to your needs. Enjoy a seamless shopping experience
          with us.
        </p>
      </div>

      <div className="flex  justify-center pt-6 space-x-16 ">
        <div className="text-slate-700 text-2xl font-bold">
          Our Special Products
        </div>
        <div>
          <Link
            to="/Register"
            className="text-white transition duration-500 ease-in-out transform hover:-translate-y-1 bg-orange-700 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className="h-1 w-28 border-b-2 rounded-xl min-[200px]:relative left-16 mt-1  md:relative md:left-1/3  md:ml-28 md:mt-2  bg-orange-500"></div>
    </div>
      {/* This section end here product showcase is below this */}


      

    </>
  );
};

export default Home;
