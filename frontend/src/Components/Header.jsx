import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar';

function Header({cart}) {
    return (
        <>

        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://botw-pd.s3.amazonaws.com/onlineshopping.png"
                            className="mr-3 h-16"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/Login"
                            className="text-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Login
                        </Link>
                        <Link
                            to="/Register"
                            className="text-white transition duration-500 ease-in-out transform hover:-translate-y-1 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Register
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 transition duration-500 ease-in-out transform hover:-translate-y-1  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/shop"
                                    className={({isActive}) =>
                                        `block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>

                            {/* for badge on cart icon */}

                            <li>
                                <NavLink
                                to="/cart"
                                    className={({isActive}) =>
                                        `block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <button type="button" className=" position-relative">
                                        Cart
                                    {
                                        cart.length!=0 ?(
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                         {cart.length}
                                            </span>
                                        ):(
                                            <span></span>
                                        )
                                    }
                                </button>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/favourites"
                                    className={({isActive}) =>
                                        `block py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 pr-4 pl-3  ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Favourites
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <Outlet/>
                          
        </>
    );
}

export default Header