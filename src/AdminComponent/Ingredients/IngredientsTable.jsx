import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    IconButton,
    Modal,
    Paper,
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
import CreateIngredientsForm from "./CreateIngredientsForm";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsOfRestaurant, updateStockOfIngredient } from "../../component/State/Ingredients/Action";
  
  const orders = [1, 1, 1, 1];
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
  export const IngredientsTable = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const dispatch=useDispatch();
const {auth,restaurant, ingredients}=useSelector(store=>store)
const jwt = localStorage.getItem("jwt")
const {resturant} = useSelector((store) => store);

const handleUpdateStock = (id) => {
  dispatch(updateStockOfIngredient({ id, jwt }));
};

useEffect(()=>{
  dispatch(getIngredientsOfRestaurant({jwt, id: resturant.usersRestaurant.id}))
}, [])
      
    return (
      <Box>
        <Card>
        <CardHeader
              title={"Ingredients"}
              sx={{
                pt: 2,
                alignItems: "center",
                "& .MuiCardHeader-action": { mt: 0.6 },
              }}
              action={
                <IconButton onClick={handleOpen}>
                  
                  <Create />
                </IconButton>
              }
            />
  
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="right">name</TableCell>
               
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Availability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ingredients.ingredients.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell align="right">{item.name}</TableCell>
                
                    <TableCell align="right">{item.category.name}</TableCell>
                    <TableCell align="right">
                      <Button onClick={()=> handleUpdateStock(item.id)}>{item.inStock? "inStock": "Out of Stock"}</Button>
                    </TableCell>

                    
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
    <CreateIngredientsForm/>
  </Box>
</Modal>

      </Box>
    );
  };
  