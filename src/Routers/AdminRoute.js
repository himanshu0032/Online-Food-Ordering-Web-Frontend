import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../AdminComponent/Admin/Admin'
import CreateResturantForm from '../AdminComponent/CreateResturantForm/CreateResturantForm'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
const {resturant} = useSelector((store) => store)
  return (
    <div>
        <Routes>
            <Route path='/*' element={!resturant.usersRestaurant?<CreateResturantForm/>: <Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute