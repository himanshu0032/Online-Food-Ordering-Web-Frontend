import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  Chip,
  IconButton,
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
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAction, getMenuItemsByRestaurantId } from "../../component/State/Menu/Action";

const orders = [1, 1, 1, 1];

export const MenuTable = () => {
    const navigate = useNavigate();
    
    const dispatch=useDispatch();
  const {auth,resturant, ingredients, menu}=useSelector(store=>store)
  const jwt = localStorage.getItem('jwt')
  
  useEffect(()=>{
    dispatch(
      getMenuItemsByRestaurantId({
        jwt,
        restaurantId: resturant.usersRestaurant?.id,
        vegetarian: false,
        nonveg: false,
        seasonal: false,
        foodCategory: "",
      })
    );
  },[])

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({foodId,jwt:auth.jwt || jwt}));
  };

  return (
    <Box>
      <Card>
        <CardHeader
          title={"Menu"}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          action={
            <IconButton onClick={() => navigate("/admin/resturants/add-menu")}>
              <Create />
            </IconButton>
          }
        />
         

        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                {/* <TableCell>Id</TableCell> */}
                <TableCell align="left">Image</TableCell>
                {/* {!isDashboard && <TableCell>Title</TableCell>} */}
                <TableCell align="left">title</TableCell>
                <TableCell align="left">Ingredients</TableCell>
                <TableCell align="left">Price</TableCell>

                <TableCell align="left">Availability</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {menu.menuItems.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell> */}
                  <TableCell align="left"><Avatar src={item.images[0]}></Avatar></TableCell>
                  <TableCell align="left">{item.name}</TableCell>

                  <TableCell align="left">
                    {item.ingredientsItems.map((ingredient) => 
                  <Chip label= {ingredient.name}/>
                  )
                  }
                  </TableCell>
                  <TableCell align="left">₹{item.price}</TableCell>
                  <TableCell align="left">{item.available?"In_Stock":"Out_Of_Stock"}</TableCell>
                  <TableCell align="left">
                    <IconButton color="primary" onClick={()=> handleDeleteFood(item.id)}>
                      <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};
