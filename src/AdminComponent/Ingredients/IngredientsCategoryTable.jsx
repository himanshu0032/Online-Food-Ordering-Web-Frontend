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
  import React from "react";
  import CreateIcon from '@mui/icons-material/Create';
  import { Create } from "@mui/icons-material";
  import { useNavigate } from "react-router-dom";
  import DeleteIcon from "@mui/icons-material/Delete";
import CreateIngredientsCategoryForm from "./CreateIngredientsCategoryForm";
  
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
  
  export const IngredientsCategoryTable = () => {
      const navigate = useNavigate();
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  
    return (
      <Box>
        <Card>
          <CardHeader 
            onClick={handleOpen}
            title={"Ingredients Category"}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}

            action={
                <IconButton>
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
                {orders.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row}
                    </TableCell>
                    <TableCell align="left">{"row.name"}</TableCell>
                    
                  
                    
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
    <CreateIngredientsCategoryForm/>
  </Box>
</Modal>
      </Box>
    );
  };
  