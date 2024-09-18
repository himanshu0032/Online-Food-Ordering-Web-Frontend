import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createIngredient, createIngredientCategory } from '../../component/State/Ingredients/Action';

const CreateIngredientsForm = () => {

    const {id}=useParams();
    const dispatch=useDispatch();
    const {auth,resturant, ingredients}=useSelector(store=>store)
    const jwt = localStorage.getItem('jwt')
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data={
        ...formData,
        resturantId: resturant.usersRestaurant.id
        
    };
    dispatch(createIngredient({data, jwt}))
    
   // handleClose()
    console.log('data:', data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=''>
       <div className='p-5'>
          <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredients</h1>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
      <TextField
      id='name'
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
      />

<FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.categoryId}
                label="Category"
                name ="categoryId"
                onChange={handleInputChange}
            >
                {ingredients.category.map((item) => <MenuItem value={item.id}>{item.name}</MenuItem>)}
                
            </Select>
            </FormControl>
     
      <Button  type="submit" variant="contained" color="primary">
        Create Ingredient
      </Button>
    </form>
       </div>
    </div>
  )
}

export default CreateIngredientsForm