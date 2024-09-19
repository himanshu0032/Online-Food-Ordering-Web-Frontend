import { Box, Button, Card, Chip, Divider, Grid, Modal, TextField } from '@mui/material';
import React from 'react';
import CartItem from './CartItem';
import AddressCart from './AddressCart';
import { create } from '@mui/material/styles/createTransitions';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';
import {createOrder} from '../State/Orders/Action'
// import * as Yup from "yup";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline:"none"
  };

// const items = [1, 1];
const Cart = (item) => {
  const {auth, cart} = useSelector(store => store)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
   
    
    const createOrderUsingSelectedAddress = () =>{
     dispatch(removeCartItem({cartItemId: item.id, jwt: auth.jwt||jwt}))
    }
    const handleOpenAddressModal = () => setOpen(true)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialValues = {
        streetAddress:"",
        state:"",
        pincode:"",
        city:""
    }
    // const validationSchema = Yup.object().shape({
    //   streetAddress: Yup.string().required("Street address is required"),
    //   state: Yup.string().required("state is required"),
    //   pinCode: Yup.required("pinCode is required"),
    //   city: Yup.string().required("city is required")
    // })
    console.log("cart is",cart)
    const handleSubmit = (values) =>{
      const data = {
        jwt: localStorage.getItem("jwt"),
        
        order: {
          restaurantId: cart.cartItems[0].food?.restaurant.id,
          deliveryAddress: {
            fullName: auth.user?.fullName,
            streetAddress: values.streetAddress,
            city: values.city,
            state: values.state,
            postalCode: values.pincode,
            country: "India"
          }
        }
      }
      dispatch(createOrder(data))
       console.log("Form values",values)
    }

  return (
    
    <>
      <main className="lg:flex justify-between">
        {/* Left Section (Cart Items) */}
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {/* {console.log("cart.cartItem=",cart.cartItems)} */}
          {
      //       Array.isArray(item.ingredients) &&
      //       item.ingredients.length > 0 ?
      //       item.ingredients.map((ingredient) => <Chip key={ingredient} label={ingredient} />)
      // : <p>No ingredients available</p> // Handle case where no ingredients exist

          cart.cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))
          

          // cart.cart.item.map((item, index) => (
          //   <CartItem key={index} item={item} />
          // ))
          }
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                {/* {console.log("cart is ", cart)} */}
                <p>₹{cart.cart?.total}</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Delivery Charge</p>
                <p>₹21</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>₹30</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total Pay</p>
              <p>₹{cart.cart?.total+30+21}</p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />

        {/* Right Section (Delivery Address) */}
        <section className="lg:w-[70%] px-5 pb-10 lg:pb-0 flex justify-center">
          <div>
          <h1 className="font-semibold text-2xl py-10 text-center">Choose Delivery Address</h1>
          <div className="flex gap-5 flex-wrap justify-center">
             {
                [1,1,1,1,1].map((item) => <AddressCart handleSelectAddress={createOrderUsingSelectedAddress}
                item={item} showButton={true}/>)
             }

<Card className='flex gap-5 w-64 p-5'>
      <AddLocationAltIcon/>
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>
            Add New Address
        </h1>
        
        {
           (<Button variant="outlined" fullWidth  onClick={handleOpenAddressModal}>Add </Button>)
        }
      </div>
    </Card>

          </div>
          </div>
          
        </section>
      </main>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Formik initialValues={initialValues}
    onSubmit={handleSubmit}
   // validationSchema={validationSchema}
    >
    <Form>
    <Grid container spacing={2}>
            <Grid item xs={12}>
                <Field as= {TextField} name="streetAddress"  label="Street Address" 
                fullWidth variant="outlined" 
                //error={!ErrorMessage("streetAddress")}
                // helperText = {
                //     <ErrorMessage>
                //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field as= {TextField} name="state"  label="State" 
                fullWidth variant="outlined"
                // error={!ErrorMessage("streetAddress")}
                // helperText = {
                //     <ErrorMessage>
                //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field as= {TextField} name="city"  label="City" 
                fullWidth variant="outlined"
                // error={!ErrorMessage("streetAddress")}
                // helperText = {
                //     <ErrorMessage>
                //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
                <Field as= {TextField} name="pincode"  label="pincode" 
                fullWidth variant="outlined"
                // error={!ErrorMessage("streetAddress")}
                // helperText = {
                //     <ErrorMessage>
                //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                //     </ErrorMessage>
                // }
                />
            </Grid>
            <Grid item xs={12}>
   <Button variant='contained' type='submit' color='primary' fullWidth>Deliver Here</Button>
            </Grid>
        </Grid>
    </Form>

    </Formik>
  </Box>
</Modal>
    </>
  );
};

export default Cart;
