import { Grid } from '@mui/material'
import React from 'react'
import {MenuTable} from '../Menu/MenuTable'
import { OrdersTable } from '../Orders/OrdersTable'

export const ResturantDashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
         <Grid item lg={6} xs={12}>
               <MenuTable/>
            </Grid>

            <Grid item lg={6} xs={12}>
               <OrdersTable/>
            </Grid>
      </Grid>
    </div>
  )
}
