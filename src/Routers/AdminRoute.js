import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../AdminComponent/Admin/Admin'
import CreateResturantForm from '../AdminComponent/CreateResturantForm/CreateResturantForm'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
const {resturant} = useSelector((store) => store)

// useEffect(() => {
//   if (resturant.usersRestaurant === null || resturant.usersRestaurant === undefined) {
//     navigate('/admin/resturants/create');
//   } else {
//     // Otherwise, redirect to the admin page
//     navigate('/admin/resturants');
//   }
// }, [resturant, navigate]);

  return (
    <div>
        <Routes>
            <Route path='/*' element={!resturant.usersRestaurant?<CreateResturantForm/>: <Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute