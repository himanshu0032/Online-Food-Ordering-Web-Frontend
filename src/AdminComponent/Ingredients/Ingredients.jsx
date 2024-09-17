import React from 'react'
import { IngredientsTable } from './IngredientsTable'
import { Grid } from '@mui/material'
import { IngredientsCategoryTable } from './IngredientsCategoryTable'

const Ingredients = () => {
  return (
    <div>
       <Grid container spacing={1}>
        <Grid  item xs={12} lg={8}>
           <IngredientsTable/>
        </Grid>

        <Grid  item xs={12} lg={4}>
           <IngredientsCategoryTable/>
        </Grid>

       </Grid>
    </div>
  )
}

export default Ingredients