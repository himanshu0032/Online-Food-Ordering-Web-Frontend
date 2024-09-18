import { CircularProgress, Grid, Input, IconButton, TextField, Button, FormControl, InputLabel, Select, Box, OutlinedInput, MenuItem, Chip } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import UploadToCloudnary from '../util/UploadToCloudnary.js';
import { useDispatch, useSelector } from 'react-redux';
import {createMenuItem} from '../../component/State/Menu/Action.js'
import { getIngredientsOfRestaurant, updateStockOfIngredient } from "../../component/State/Ingredients/Action";


const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  resturantId: "",
  vegetarian: "",
  seasonal: "",
  ingredientsItems: [],
  images: [],
};



const CreateMenuForm = () => {
  const [uploadImage, setUploadingImage] = useState("");
  const dispatch=useDispatch();
  const {auth,resturant, ingredients}=useSelector(store=>store)
  const jwt = localStorage.getItem('jwt')
  
  const handleSubmit = (values) => {
    values.resturantId = resturant.usersRestaurant?.id
     dispatch(createMenuItem({ menu:values, jwt }));
    console.log("data =", values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  useEffect(()=>{
    dispatch(getIngredientsOfRestaurant({jwt, id: resturant.usersRestaurant.id}))
  }, [])

  const handleImageChange = async (event) => {
       const file = event.target.files[0];
     setUploadingImage(true);
    // const image = await UploadToCloudnary(file);
    // console.log("image----",image)
    // formik.setFieldValue("images", [...formik.values.images, image]);
    // setUploadingImage(false);

    try {
      const image = await UploadToCloudnary(file);
      if (image) {
        console.log("Uploaded image URL:", image);
        formik.setFieldValue("images", [...formik.values.images, image]);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploadingImage(false); // Stop spinner regardless of success or failure
    }

  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl ">
      <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Grid container spacing={2}>
        <Grid className="flex flex-wrap gap-5" item xs={12}>
        <Input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

             <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon
                    className="text-white"
                  />
                </span>
                {uploadImage && 
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                <CircularProgress />
                </div>}
              </label>

              <div className="flex flex-wrap gap-2">
                {
                  formik.values.images.map((image, index) => 
                  <div className='relative'>
                    <img className='w-24 h-24 object-cover' key={index}
                    src={image}
                     alt=''/>
                    <IconButton  size='small'
                    sx={
                      {
                        position:'absolute',
                        top: 0,
                        right: 0,
                        outline: "none",
                      }
                    }
                    onClick={()=> handleRemoveImage(index)}>
                      <CloseIcon sx={{fontSize:"1rem"}}/>
                    </IconButton>
                     </div>
                     )
                }
              </div>
        </Grid>
        <Grid item xs={12}>
        <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
        </Grid>

        <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.cuisineType}
              />
            </Grid>
            <Grid item xs={6}>
        
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.category}
                label="Category"
                name ="category"
                onChange={formik.handleChange}
            >
               {
                resturant.categories?.map( (item) => (
                  <MenuItem value={item}>{item.name}</MenuItem>
                ))
               }
               
            </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          name = "ingredientsItems"
          multiple
          value={formik.values.ingredientsItems}
          onChange={formik.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="ingredientsItems" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.id} label={value.name} />
              ))}
            </Box>
          )}
         // MenuProps={MenuProps}
        >
          {ingredients.ingredients?.map((item, index) => (
            <MenuItem
              key={item.id}
              value={item}
              
            > 
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </Grid>

            <Grid item xs={6}>
        
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">is vegetarian</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.vegetarian}
                label="is Vegetarian"
                name ="vegetarian"
                onChange={formik.handleChange}
            >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
                
            </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
        
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">is Seasonal</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.seasonal}
            label="is Seasonal"
            name ="seasonal"
            onChange={formik.handleChange}
        >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
            
        </Select>
        </FormControl>
        </Grid>
        
        </Grid>
        <Button fullWidth variant="contained" color="primary" type="submit">
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CreateMenuForm