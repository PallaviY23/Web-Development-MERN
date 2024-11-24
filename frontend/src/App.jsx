import React, { useState } from 'react'
import Product from './Pages/Product.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetailed from './Pages/ProductDetailed'
import Cart from './Pages/Cart'
import Favourites from './Pages/Favourites'
import { items } from './Pages/data.jsx'
import MainSection from './Pages/MainSection.jsx'
import Header from './Components/Header.jsx'
import Navbar from './Pages/Navbar.jsx'
import Carousel from './Pages/Carousel.jsx'
import {slides} from "./Pages/carouselData.json"
import Homeproducts from './Pages/Homeproducts.jsx'
import Footer from './Pages/Footer.jsx'
import Testimonials from './Pages/Testimonials.jsx'





const App = () => {

  
  const [data,setData] = useState([...items])

  const [cart,setCart] = useState([])

  const [favourites,setFavourites] = useState([])

  return (
    <>
      <Router>
        <Header cart={cart} favourites={favourites} />
        
      <Routes>
        
        <Route path='/' element={<> <Carousel data={slides} /> <MainSection/> <Homeproducts cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites} /> <Testimonials/> <Footer/> </>} />
        <Route path='/shop' element={<> <Navbar setData={setData} /> <Product cart={cart} setCart={setCart} favourites={favourites} setFavourites={setFavourites} items={data} />  </> } />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetailed />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='/favourites' element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />

      </Routes>

      </Router>
    </>
  )
}

export default App

