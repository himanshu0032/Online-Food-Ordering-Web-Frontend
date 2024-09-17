import React from 'react'
import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard, { ResturantDashboard } from '../Dashboard/ResturantDashboard'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import Events from '../Events/Events'
import { FoodCategory } from '../FoodCategory/FoodCategory'
import Details, { ResturantDetails } from '../Details/ResturantDetails'
import Ingredients from '../Ingredients/Ingredients'
import CreateMenuForm from '../Menu/CreateMenuForm'

const Admin = () => {
  const handleClose = () => {
        
  }
  return (
    <div>
      <div className='lg:flex justify-between'>
         <div>
         <AdminSideBar handleClose={handleClose}/>
         </div>
         <div className='lg:w-[80%]'>
          <Routes>
          <Route path="/" element={<ResturantDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/add-menu" element={<AddMenuForm />} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm />} /> */}
            <Route path="/event" element={<Events />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/details" element={<ResturantDetails />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
            
          </Routes>
         </div>
      </div>
    </div>
  )
}

export default Admin