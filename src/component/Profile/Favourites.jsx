import React from 'react'
import ResturantCard from '../Resturant/ResturantCard'

const Favourites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold  text-center'>
        My Favourites
      </h1>
      <div className='flex flex-wrap justify-center gap-3'>
         {
          [1,1,1].map((item)=> <ResturantCard/>)
         }
      </div>
    </div>
  )
}

export default Favourites