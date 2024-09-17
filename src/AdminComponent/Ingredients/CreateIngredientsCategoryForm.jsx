import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreateIngredientsCategoryForm = () => {

    const {id}=useParams();
    const dispatch=useDispatch();
    const {auth,restaurant}=useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
 
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleFormSubmit = () => {
   
    console.log('formData:', formData);
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
          <h1 className='text-gray-400 text-center text-xl pb-10'> Create Ingredient Category</h1>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
      <TextField
        id='name'
        label="Category"
        name="name"
        value={formData.name}
        variant='outlined'
        onChange={handleInputChange}
        fullWidth
      />
     
      <Button  type="submit" variant="contained" color="primary">
        Create Ingredient
      </Button>
    </form>
       </div>
    </div>
  )
}

export default CreateIngredientsCategoryForm