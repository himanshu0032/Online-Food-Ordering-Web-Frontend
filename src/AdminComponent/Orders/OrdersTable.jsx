import { Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const orders = [
    1,1,1,1
    
  ];

export const OrdersTable = () => {
  return (
   <Box>
    <Card>
        <CardHeader
        title={"All Orders"}
        sx={{
          pt: 2,
          alignItems: "center",
          "& .MuiCardHeader-action": { mt: 0.6 },
        }}
        />




<TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
              <TableCell>Id</TableCell>
                <TableCell align="right">Image</TableCell>
                {/* {!isDashboard && <TableCell>Title</TableCell>} */}
                <TableCell align="right">Customer</TableCell>
                <TableCell align="right">Price</TableCell>
             
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Status</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
            {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"code@gmail.com"}</TableCell>
              
              <TableCell align="right">{"price"}</TableCell>
              <TableCell align="right">{"ingredients"}</TableCell>
              <TableCell align="right">{"Completed"}</TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>

    </Card>
   </Box>
  )
}
