import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="px-5 sticky top-0 z-50 py-[.8em] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">Food App</li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
             <SearchIcon sx={{fontSize:"1.5rem"}}/>
          </IconButton>
        </div>
        <div className="">
            <Avatar sx={{bgcolor:"white", color:pink[400]}}>
              C
            </Avatar>
        </div>

        <div className="">
            <IconButton>
              <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon/>
              </Badge>
              
            </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
