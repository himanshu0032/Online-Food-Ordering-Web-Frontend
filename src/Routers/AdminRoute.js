import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../AdminComponent/Admin/Admin'
import CreateResturantForm from '../AdminComponent/CreateResturantForm/CreateResturantForm'

const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={false?<CreateResturantForm/>: <Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute