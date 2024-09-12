import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'> 
         <div className='flex items-center space-x-5'>
             <img className='h-16 w-16'
             src='https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg' alt=''/>
             <div>
                <p>Biryani</p>
                <p>$399</p>
             </div>
         </div>
         <div>
            <Button disabled className='cursor-not-allowed'>Completed</Button>
         </div>
    </Card>
  )
}

export default OrderCard