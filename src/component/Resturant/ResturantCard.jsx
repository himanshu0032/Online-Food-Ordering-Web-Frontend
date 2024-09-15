import { Card, Chip, IconButton } from '@mui/material'
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite } from '../State/Authentication/Action';
import { isPresentInFavourites } from '../config/logic';

const ResturantCard = ({item}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {auth} = useSelector( store => store)
  const jwt = localStorage.getItem("jwt")

  const  handleAddToFavourite = () =>{
    console.log("resturant id is ", item.id)
    dispatch(addToFavourite({ resturantId: item.id,jwt:jwt}))
  }

  const handleNavigateToResturant = () =>{
    if(item.open){
      //console.log("city is,",item.address.city, " name is", item.name, " and id is ", item.id)
      navigate(`/resturant/${item.address.city}/${item.name}/${item.id}`)
    }
  }

  return (
    <Card className='w-[18rem]'>
    <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
      <img className='w-full h-[10rem] rounded-t-md object-cover'
      src={item.images[1]} alt=''/>
      <Chip size='small' className='absolute top-2 left-2'
      color={item.open?"success":"error"}
      label={item.open?"open":"closed"}
      />
    </div>
    <div className='p-4 textPart lg:flex w-full justify-between'>
       <div className='space-y-1'>
       <p  onClick= {handleNavigateToResturant} className='font-semibold text-lg cursor-pointer'>{item.name}</p>
          <p className='text-gray-500 text-sm'>
         {item.description}
          </p>
       </div>
       <div>
         <IconButton onClick={handleAddToFavourite}>
            {isPresentInFavourites(auth.favourites, item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
         </IconButton>
       </div>
    </div>
    </Card>
  )
}

export default ResturantCard