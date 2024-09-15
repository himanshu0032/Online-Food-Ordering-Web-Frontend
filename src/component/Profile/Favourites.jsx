import React from 'react'
import ResturantCard from '../Resturant/ResturantCard'
import { useSelector } from 'react-redux'

const Favourites = () => {
  const {auth} = useSelector(store =>  store)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold  text-center'>
        My Favourites
      </h1>
      <div className='flex flex-wrap justify-center gap-3'>
         {
          auth.favourites.map((item)=> <ResturantCard item={item}/>)
         }
      </div>
    </div>
  )
}

export default Favourites