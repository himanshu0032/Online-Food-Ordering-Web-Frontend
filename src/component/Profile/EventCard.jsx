import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width: 345}}>
            <CardMedia 
            sx={{height:345}}
            image='https://cdn.pixabay.com/photo/2024/02/16/15/36/recipe-8577854_640.jpg'/>

            <CardContent>
                <Typography variant='h5'>
                    Indian Food Corner
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                   <p>{"Mumbai"}</p>
                   <p className='text-sm text-blue-500'>August 12, 2024 12:00 AM</p>
                   <p className='text-sm text-red-500'>December 12, 2024 12:00 AM</p>
                </div>
            </CardContent>
            {
                true && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
            }
        </Card>
    </div>
  )
}

export default EventCard