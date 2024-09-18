import {
    Box,
    Card,
    CardActions,
    CardHeader,
    IconButton,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import CreateIcon from '@mui/icons-material/Create';
  import { Create } from "@mui/icons-material";
  import { useNavigate } from "react-router-dom";
  import DeleteIcon from "@mui/icons-material/Delete";
import CreateFoodCategoryForm from "./CreateFoodCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantsCategory } from "../../component/State/Resturant/Action";
import { fetchRestaurantsOrder } from "../../component/State/ResturantOrder/Action";
  // import Box from '@mui/material/Box';
  
  const orders = [1, 2, 3, 4];
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  export const FoodCategoryTable = () => {
    const {resturant, auth} = useSelector((store) => store);
      const navigate = useNavigate();
      const dispatch=useDispatch();
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //console.log("Resturant Details", resturant)
  const jwt = localStorage.getItem("jwt")

  useEffect(() => {
    dispatch(
      getRestaurantsCategory({
        jwt: auth.jwt || jwt,
        resturantId: resturant.usersRestaurant?.id,
      })
    )
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurantId: resturant.usersRestaurant?.id,
      
    }))
    },[])

    return (
      <Box>
        <Card>
          <CardHeader
         
            title={"Food Category"}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}

            action={
              <IconButton  onClick={handleOpen}>
                <Create />
              </IconButton>
            }
          />
           
  
          <TableContainer>
            <Table sx={{}} aria-label="table in dashboard">
              <TableHead>
              <TableRow>
              <TableCell>Id</TableCell>
                
             
                <TableCell>Name</TableCell>
             
               
              
              </TableRow>
              </TableHead>
              <TableBody>
                {resturant.categories.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}

                  

                  >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    
                  
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <CreateFoodCategoryForm/>
  </Box>
</Modal>

      </Box>

      
    );
  };
  