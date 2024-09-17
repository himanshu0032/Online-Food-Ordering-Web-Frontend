import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreateIngredientsForm = () => {

    const {id}=useParams();
    const dispatch=useDispatch();
    const {auth,restaurant}=useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
 
  const [formData, setFormData] = useState({
    name: '',
    ingredientsCategoryId: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data={
        name:formData.categoryName,
        restaurantId:{
            id:1,
        },
    };
    // dispatch(createCategoryAction({reqData:data, jwt: auth.jwt || jwt}))
    // setFormData({
    //   categoryName: '',
    //   restaurantId: '',
    // })
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
          <h1 className='text-gray-400 text-center text-xl pb-10'>Create Category</h1>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
      <TextField
        label="Category Name"
        name="categoryName"
        value={formData.categoryName}
        onChange={handleInputChange}
        fullWidth
      />

<FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.ingredientsCategoryId}
                label="Category"
                name ="ingredientsCategoryId"
                onChange={handleInputChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
     
      <Button  type="submit" variant="contained" color="primary">
        Create
      </Button>
    </form>
       </div>
    </div>
  )
}

export default CreateIngredientsForm