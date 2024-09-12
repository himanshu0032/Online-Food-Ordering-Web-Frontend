import React from 'react'
import Navbar from "../component/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import ResturantDetails from '../component/Resturant/ResturantDetails'
import Cart from '../component/Cart/Cart'
import Profile from '../component/Profile/Profile'
import Auth from '../component/Auth/Auth'


const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account/:register' element={<Home/>}/>
        <Route path='/resturant/:city/:title/:id' element={<ResturantDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/my-profile/*' element={<Profile/>}/>
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRoute