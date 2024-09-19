import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import {createEventAction} from '../../component/State/Resturant/Action.js'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  image: "",
  location: "",
  name: "",
  startedAt: null,
  endsAt: null,
};

const Events = () => {
  const [image, setimage] = useState("");
  const dispatch = useDispatch();
  const { resturant, auth } = useSelector((store) => store);

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const jwt = localStorage.getItem("jwt");

  const [formValues, setFormValues] = useState(initialValues);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateType) => {
    
    setFormValues({ ...formValues, [dateType]: date });  // Store the Day.js object directly
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form Values", formValues)
    // Convert dates to string format when submitting, if needed
    const submittedValues = {
      ...formValues,
      startedAt: formValues.startedAt.format("MMMM DD, YYYY hh:mm A"),
      endsAt: formValues.endsAt.format("MMMM DD, YYYY hh:mm A"),
    };
     console.log("submitted values", submittedValues);
    dispatch(createEventAction({ data: submittedValues, restaurantId: resturant.usersRestaurant?.id, jwt }));
    // console.log("Image URL:", submittedValues, restaurant.usersRetaurant?.id);
     setFormValues(initialValues);
    // handleCloseModal();
  };

  return (
    <div>
      <div className="p-5">
        <Button
          sx={{ padding: "1rem 2rem" }}
          onClick={handleOpenModal}
          variant="contained"
          color="primary"
        >
          Create New Event
        </Button>
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="image"
                  label="Image URL"
                  variant="outlined"
                  fullWidth
                  value={formValues.image}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="location"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  value={formValues.location}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Event Name"
                  variant="outlined"
                  fullWidth
                  value={formValues.name}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue) =>
                      handleDateChange(newValue, "startedAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End Date and Time"
                    value={formValues.endsAt}
                    onChange={(newValue) =>
                      handleDateChange(newValue, "endsAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{ width: "100%" }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Events;
