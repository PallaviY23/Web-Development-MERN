import React from "react";
import { items } from "./data";


const Navbar = ({setData}) => {

    const filterByCategory = (category) => {
        const element = items.filter((p)=>p.category === category)
        setData(element)
    }

    const filterByBrand = (brand) => {
        const element = items.filter((p)=>p.brand === brand)
        setData(element)
    }

    const filterByPrice = (price) => {
        const element = items.filter((p)=>p.price <=price)
        setData(element)
    }

  return (
    <>
      <div className="shadow sticky z-50 top-20">
        <div className=" bg-white justify-between border-gray-200 px-4 lg:px-6 py-2.5 flex flex-col mt- font-medium lg:flex-row lg:space-x-8 lg:mt-0">

          <div className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 text-blue-600 lg:p-0">
            Filters By{"->"}
          </div>
          <div onClick={()=>setData(items)} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           No Filters
          </div>
          <div onClick={()=>filterByCategory('laptops')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           Laptops
          </div>
          <div onClick={()=>filterByCategory('clothes')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           Clothes
          </div>
          <div
           onClick={()=>filterByCategory('mobiles')}
           className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           Mobiles
          </div>
          <div onClick={()=>filterByCategory('tablets')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           Tabs
          </div>
          <div onClick={()=>filterByCategory('drones')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
           Drones
          </div>
          <div onClick={()=>filterByBrand('apple')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
          Apple 
          </div>
          <div onClick={()=>filterByBrand('asus')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
          Asus 
          </div>
          <div onClick={()=>filterByBrand('denim')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
          Denim
          </div>
          <div onClick={()=>filterByPrice('$199.00')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
          {"<=$"}199.00
          </div>
          <div onClick={()=>filterByPrice('$299.00')} className="block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0">
          {"<=$"}299.00
          </div>


        </div>



      </div>
    </>
  );
};

export default Navbar;