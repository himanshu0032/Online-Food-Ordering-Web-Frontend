import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder, updateOrderStatus } from "../../component/State/ResturantOrder/Action";

const orders = [1, 1, 1, 1];

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

export const OrdersTable = () => {
  const dispatch = useDispatch();
  const { auth, resturant, ingredients, menu, restaurantOrder } = useSelector(
    (store) => store
  );
  const jwt = localStorage.getItem("jwt");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(
      fetchRestaurantsOrder({
        jwt,
        restaurantId: resturant.usersRestaurant.id,
      })
    );
  }, []);

  const handleUpdateOrder = (orderId, orderStatus) => {
   // handleUpdateStatusMenuClose(index);
    dispatch(updateOrderStatus({ orderId, orderStatus,jwt }));
  };

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
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurantOrder.orders.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">
                    {
                      <AvatarGroup>
                        {item.items.map((orderItem) => (
                          <Avatar src={orderItem.food?.images[0]} />
                        ))}
                      </AvatarGroup>
                    }
                  </TableCell>
                  <TableCell align="right">{item.customer?.fullName}</TableCell>

                  <TableCell align="right">${item.totalPrice}</TableCell>
                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <p>{orderItem.food?.name}</p>
                    ))}
                  </TableCell>

                  <TableCell align="right">
                    {item.items.map((orderItem) => (
                      <div>
                        {orderItem.ingredients.map((ingredient) => (
                          <Chip label={ingredient} />
                        ))}
                      </div>
                    ))}
                  </TableCell>

                  <TableCell align="right">{item.orderStatus}</TableCell>
                  <TableCell align="right">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      Change Status
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {orderStatus.map((status) => (
                        <MenuItem onClick={()=> handleUpdateOrder(item.id, status.value)}>{status.label}</MenuItem>
                      ))}
                    </Menu>
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
